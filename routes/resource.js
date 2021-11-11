var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Icecream_controller = require('../controllers/Icecream');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Icecream ROUTES ///
// POST request for creating a Icecream.
router.post('/Icecream', Icecream_controller.Icecream_create_post);
// DELETE request to delete Icecream.
router.delete('/Icecream/:id', Icecream_controller.Icecream_delete);
// PUT request to update Icecream.
router.put('/Icecream/:id',Icecream_controller.Icecream_update_put);
// GET request for one Icecream.
router.get('/Icecream/:id', Icecream_controller.Icecream_detail);
// GET request for list of all Icecream items.
router.get('/Icecream', Icecream_controller.Icecream_list);
module.exports = router;