var Icecream = require('../models/Icecream');
// List of all Icecreams
exports.Icecream_list = async function(req, res) {
    try{
    theIcecream = await Icecream.find();
    res.send(theIcecream);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific Icecream.
exports.Icecream_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Icecream detail: ' + req.params.id);
};
// Handle Icecream create on POST.
exports.Icecream_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Icecream create POST');
};
// Handle Icecream delete form on DELETE.
exports.Icecream_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Icecream delete DELETE ' + req.params.id);
};
// Handle Icecream update form on PUT.
exports.Icecream_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Icecream update PUT' + req.params.id);
};