const orm = require("../config/orm.js");

const burger = {
	all : (cb)=> {
		orm.selectAll("burgers", (data) => {
			cb(data);
		});
	},
	insert : function() {

	}, 
	update : (colToEdit, condition, cb) => {
		orm.updateOne("burgers", colToEdit, condition, (data) => {
			cb(data);
		});

	}
}

module.exports = burger;