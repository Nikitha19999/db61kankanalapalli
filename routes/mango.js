var express = require('express');
const mango_controllers= require('../controllers/mango'); 
var router = express.Router();

/* GET home page. */
router.get('/', mango_controllers.mango_view_all_Page);
/* GET detail dog page */ 
router.get('/detail', mango_controllers.mango_view_one_Page); 

// /* GET create costume page */ 
router.get('/create', mango_controllers.mango_create_Page); 
// /* GET create update page */ 
router.get('/update', mango_controllers.mango_update_Page); 
// /* GET delete costume page */ 
router.get('/delete', mango_controllers.mango_delete_Page); 
module.exports = router;

 