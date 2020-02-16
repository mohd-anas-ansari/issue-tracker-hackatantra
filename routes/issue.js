var express = require('express');
var router = express.Router();
var Issue = require("../models/issue");
var issueController = require('../controllers/issueController');




//Show Issues
router.get('/', issueController.issuesDisplay);

//Create an Issue
router.post("/create", issueController.createIssue);

// Update issue status
router.put("/status", issueController.updateIssue);

  
module.exports = router;