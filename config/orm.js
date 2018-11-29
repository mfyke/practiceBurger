var connection = require('./connection.js');

var orm = {
	selectAll : function (table,cb) {
		var queryString = `select * from ${table};`;
		connection.query(queryString, function(error, results, fields) {
			if (error) {
				throw error;
			}
  			cb(results);
		});
	},
	insertOne : function() {
		var queryString;
		connection.query(queryString, function(error, results, fields) {
  			
		});
	},
	updateOne : function() {
		var queryString;
		connection.query(queryString, function(error, results, fields) {
  			
		});
	}
};

module.exports = orm;
