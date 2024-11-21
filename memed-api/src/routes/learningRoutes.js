const express = require('express');
const multer = require('multer');
const router = express.Router();
const { createLearningCtrl, getAllLearningsCtrl } = require('../controller/learningController')
const upload = multer();

router.post('/', upload.none(), createLearningCtrl)
router.get('/', getAllLearningsCtrl)

module.exports = router;