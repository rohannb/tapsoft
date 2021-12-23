var express = require('express');
var router = express.Router();
const empController = require(`../controller/employee`)

router.get('/list', empController.list);

module.exports = router;
