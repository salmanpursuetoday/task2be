const express = require('express');
const router = express.Router();
const { create, getResults } = require('../../controllers/Result');

router.post('/create', create);
router.get('/get/:rollNumber', getResults);

module.exports = router;