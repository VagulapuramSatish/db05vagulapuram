var express = require('express');
const Icecream_controlers= require('../controllers/Icecream');
var router = express.Router();
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

router.get('/', Icecream_controlers.Icecream_view_all_Page );
/* GET detail Icecream page */
router.get('/detail', Icecream_controlers.Icecream_view_one_Page);
/* GET create Icecream page */
router.get('/create', secured,Icecream_controlers.Icecream_create_Page);
/* GET create update page */
router.get('/update', secured,Icecream_controlers.Icecream_update_Page);
/* GET create Icecream page */
router.get('/delete', secured,Icecream_controlers.Icecream_delete_Page);
module.exports = router;
