var Issue = require("../models/issue");
var Admin = require("../models/admin");

module.exports = {
    issuesDisplay: function(req, res, next) {
        Issue.find({}, (err, issue) => {
          if(err) return err;
          console.log(issue, "LOgged In Issues")
        //   res.json('issue',{issue})
          res.send(issue);
        })
      },
      
    createIssue: (req, res, next) => {
        console.log(req.body)
        Issue.create(req.body, (err, createdIssue) => {
          if (err) return next(err);
          res.json(createdIssue);
        });
      },

    updateIssue: (req, res) => {
      console.log("Trying to update issue", req.body);
      const username = req.body.username;
      const issueId = req.body.issueId;
      const newStatus = req.body.status; // Permitted values are "raised", "in_progress" and "closed"
      Admin.findOne({username: username}, (err, admin)  => {
        if (err) return err;
        Issue.findOneAndUpdate({_id: issueId}, {status: newStatus}, {new: true}, (err, updatedIssue) => {
          if (err) return err;
          res.json(updatedIssue);
        });
      });
    },

    togglePlusOne: (req, res, next) => {
      console.log("Trying to toggle plus one", req.body);
      const username = req.body.username;
      const issueId = req.body.issueId;
      Issue.findOne({_id: issueId}, (err, issue)  => {
        if (err) return next(err);
        console.log("makeba", issue.plusOnes);
        let isPlusOneActive = issue.plusOnes.filter(plusone => plusone.username == username).length > 0;
        if (isPlusOneActive) {
          issue.plusOnes = issue.plusOnes.filter(plusone => plusone.username != username);
        } else {
          issue.plusOnes.push({username});
        }
        issue.save();
        res.json(issue);
      });
    },

}