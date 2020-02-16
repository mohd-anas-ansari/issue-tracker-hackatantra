var express = require('express');
var router = express.Router();
var Issue = require("../models/issue");
var issueController = require('../controllers/issueController');
var authController = require("../controllers/authController");



// Verify Auth Token first
router.use("/", authController.verifyToken);

//Show Issues
router.get('/', issueController.issuesDisplay);

//Create an Issue
router.post("/create", issueController.createIssue);

// Update issue status
router.put("/status", issueController.updateIssue);

// Add comment
router.put("/comment", issueController.addComment);

  
module.exports = router;