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
exports.Icecream_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Icecream();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Icecream_type":"goat", "cost":12, "size":"large"}
    document.brand = req.body.brand;
    document.flavour = req.body.flavour;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle Icecream delete form on DELETE.
exports.Icecream_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Icecream delete DELETE ' + req.params.id);
};
// Handle Icecream update form on PUT.
exports.Icecream_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Icecream update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.Icecream_view_all_Page = async function(req, res) {
    try{
    theIcecream = await Icecream.find();
    res.render('Icecream', { title: 'Icecream Search Results', results: theIcecream });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };