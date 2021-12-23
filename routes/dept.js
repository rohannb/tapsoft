var express = require('express');
var router = express.Router();
const deptController = require(`../controller/department`);

router.get('/list', deptController.list);

module.exports = router;