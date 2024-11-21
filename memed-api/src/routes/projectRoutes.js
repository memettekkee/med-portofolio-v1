const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createProjectCtrl, getAllProjectsCtrl } = require('../controller/projectController');
const upload = multer();

router.post('/', upload.none(), createProjectCtrl)
router.get('/', getAllProjectsCtrl)

module.exports = router