var Issue = require("../models/issue");

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

    closeIssue: (req, res, next) => {
        const issueId = req.body.id;
        console.log(`ID of issue to be closed: ${issueId}`);
        Issue.findByIdAndUpdate(issueId, { isClosed : true}, {new: true}, (err, closedIssue) => {
          if (err) return err;
          console.log(`Closed issue with id ${issueId}`);
          res.json(closedIssue);
        });
      }
}