var express = require('express');
const Icecream_controlers= require('../controllers/Icecream');
var router = express.Router();

router.get('/', Icecream_controlers.Icecream_view_all_Page );
/* GET detail Icecream page */
router.get('/detail', Icecream_controlers.Icecream_view_one_Page);
/* GET create Icecream page */
router.get('/create', Icecream_controlers.Icecream_create_Page);
/* GET create update page */
router.get('/update', Icecream_controlers.Icecream_update_Page);
/* GET create Icecream page */
router.get('/delete', Icecream_controlers.Icecream_delete_Page);
module.exports = router;
