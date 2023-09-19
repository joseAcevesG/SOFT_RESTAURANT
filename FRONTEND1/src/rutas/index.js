const express = require('express');
const router = express.Router();

const index = require('./index');


router.use('', express.json());

//router.use('/index', index);

module.exports = router;