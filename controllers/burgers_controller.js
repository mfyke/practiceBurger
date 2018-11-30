const burger = require("../models/burger.js");
const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
	burger.all((data)=> {
		const hbobj = {
			burgers: data
		}
		// console.log(hbobj);
		res.render("index", hbobj);
	});
});

router.put("/:id", (req,res) => {
	const condition = {
		name: Object.keys(req.params),
		value: req.params.id
	}
	const cols = {
		name: Object.keys(req.body),
		value: req.body.devoured
	}
	// console.log(cols, condition);
	burger.update(cols, condition, (data) => {
		res.redirect("/");
	});
});



module.exports = router;