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
exports.Icecream_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Icecream.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle Icecream create on POST.
exports.Icecream_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Icecream();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Icecream_type":"goat", "flavour":12, "size":"large"}
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
exports.Icecream_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Icecream.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle Icecream update form on PUT.
exports.Icecream_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Icecream.findById( req.params.id)
    // Do updates of properties
    if(req.body.brand)
    toUpdate.brand = req.body.brand;
    if(req.body.flavour) toUpdate.flavour = req.body.flavour;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
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
// Handle a show one view with id specified by query
exports.Icecream_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Icecream.findById( req.query.id)
    res.render('Icecreamdetail',
   { title: 'Icecream Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for creating a Icecream.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Icecream_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Icecreamcreate', { title: 'Icecream Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for updating a Icecream.
// query provides the id
exports.Icecream_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Icecream.findById(req.query.id)
    res.render('Icecreamupdate', { title: 'Icecream Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle a delete one view with id from query
exports.Icecream_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Icecream.findById(req.query.id)
    res.render('Icecreamdelete', { title: 'Icecream Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };