// var express = require("express");
// var router = express.Router();

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("mango", { title: "Search Results for mangos" });
// });

// module.exports = router;

var express = require("express");
const mango_controlers = require("../controllers/mango");
var router = express.Router();

/* GET restaurants */
router.get("/", mango_controlers.mango_view_all_Page);
module.exports = router;