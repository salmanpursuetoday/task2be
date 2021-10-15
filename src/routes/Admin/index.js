const express = require('express');
const router = express.Router();
const { creteAdmin, signin, } = require('../../controllers/Admin');


router.get('/create', creteAdmin);
router.post('/signin', signin);

module.exports = router;