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

    reviewIssue: (req, res, next) => {
      console.log("Trying to review issue", req.body);
      const username = req.body.username;
      const issueId = req.body.issueid;
      const review = req.body.review;
      Admin.findOne({username}, (err, admin)  => {
        console.log(err);
        if (err) return next(err);
        Issue.findOneAndUpdate({_id: issueId}, {review: review}, {new: true}, (err, reviewedIssue) => {
          console.log(err);
          if (err) return next(err);
          res.json(reviewedIssue);
        });
      });
    }
}