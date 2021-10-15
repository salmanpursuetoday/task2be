const express = require('express');
const router = express.Router();
const { create, getStudnets } = require('../../controllers/Student');

router.post('/create', create);
router.get('/get', getStudnets);

module.exports = router;