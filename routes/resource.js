var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var mango_controller = require('../controllers/mango'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/resource/mangos', mango_controller.mango_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/resource/mangos/:id', mango_controller.mango_delete); 
 
// PUT request to update Costume. 
router.put('/resource/mangos/:id', 
mango_controller.mango_update_put); 
 
// GET request for one Costume. 
router.get('/resource/mangos/:id', mango_controller.mango_detail); 
 
// GET request for list of all Costume items. 
router.get('/resource/mangos', mango_controller.mango_list); 
 
module.exports = router; 