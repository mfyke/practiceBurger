var orm = require("../config/orm.js");

var burger = {
	all : function(cb) {
		orm.selectAll("burgers", function(data) {
			cb(data);
		});
	},
	insert : function() {

	}, 
	update : function() {

	}
}

module.exports = burger;