var express = require('express');
var router = express.Router();
var Issue = require("../models/issue");



//Show Issues
router.get('/', function(req, res, next) {
    Issue.find({}, (err, issue) => {
      if(err) return err;
      console.log(issue, "LOgged In Issues")
    //   res.json('issue',{issue})
      res.send(issue);
    })
  });

//Create an Issue
router.post("/create", (req, res, next) => {
    console.log(req.body)
    Issue.create(req.body, (err, createdIssue) => {
      if (err) return next(err);
      res.json(createdIssue);
    });
  });

  
module.exports = router;