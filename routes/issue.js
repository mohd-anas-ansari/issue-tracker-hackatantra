var express = require('express');
var router = express.Router();
var Issue = require('../models/issue');
var issueController = require('../controllers/issueController');
var authController = require('../controllers/authController');

// Verify Auth Token first
// router.use("/", authController.verifyToken);

//Show Issues
router.get('/', issueController.issuesDisplay);

//Create an Issue
router.post('/create', issueController.createIssue);

//singleIssue
router.get('/:id', issueController.getSingleIssue);

// Update issue status
router.put('/status', issueController.updateIssue);

module.exports = router;
