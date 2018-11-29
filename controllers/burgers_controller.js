var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

router.get("/", function(req,res) {
	burger.all(function(data) {
		var hbobj = {
			burgers: data
		}
		console.log(hbobj);
		res.render("index", hbobj);
	})
});





module.exports = router;