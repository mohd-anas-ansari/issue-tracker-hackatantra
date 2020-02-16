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

    addComment: (req, res, next) => {
      console.log("Trying to add comment", req.body);
      const username = req.body.username;
      const issueId = req.body.issueId;
      const text = req.body.text;
      Issue.findOneAndUpdate({_id: issueId}, {"$push": {"comments": {username, text}}}, {new: true}, (err, updatedIssue)  => {
        if (err) return next(err);
        res.json(updatedIssue);
      });
    },

}