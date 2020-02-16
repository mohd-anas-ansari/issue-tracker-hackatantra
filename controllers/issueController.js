var Issue = require('../models/issue');
var Admin = require('../models/admin');

module.exports = {
  issuesDisplay: function(req, res, next) {
    Issue.find({}, (err, issue) => {
      if (err) return err;
      //   res.json('issue',{issue})
      res.json(issue);
    });
  },
  getSingleIssue: (req, res) => {
    console.log('inside singleIssue');
    Issue.findById(req.params.id)
      .then(issue => {
        if (!issue) {
          return res.status(404).send({
            message: `Issue not found with id ${req.params.Id}`,
          });
        }
        res.json({ issue });
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: `Content not found with id ${req.params.contentId}`,
          });
        }
        return res.status(500).json({
          message: `Error retrieving content with id ${req.params.contentId}`,
        });
      });
  },

  createIssue: (req, res, next) => {
    console.log(req.body);
    Issue.create(req.body, (err, createdIssue) => {
      if (err) return next(err);
      res.json(createdIssue);
    });
  },

  updateIssue: (req, res) => {
    console.log('Trying to update issue', req.body);
    const username = req.body.username;
    const issueId = req.body.issueId;
    const newStatus = req.body.status; // Permitted values are "raised", "in_progress" and "closed"
    Admin.findOne({ username: username }, (err, admin) => {
      if (err) return err;
      Issue.findOneAndUpdate(
        { _id: issueId },
        { status: newStatus },
        { new: true },
        (err, updatedIssue) => {
          if (err) return err;
          res.json(updatedIssue);
        },
      );
    });
  },
};
