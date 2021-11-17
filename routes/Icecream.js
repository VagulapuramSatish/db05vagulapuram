var express = require('express');
const Icecream_controlers= require('../controllers/Icecream');
var router = express.Router();

router.get('/', Icecream_controlers.Icecream_view_all_Page );
/* GET detail Icecream page */
router.get('/detail', Icecream_controlers.Icecream_view_one_Page);
module.exports = router;
