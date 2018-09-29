var connection = require('./connection.js');

var orm = {
	selectAll : function () {
		connection.query('SELECT * FROM "burgers";', function(error, results, fields) {
  			// error will be an Error if one occurred during the query
  			// results will contain the results of the query
  			// fields will contain information about the returned results fields (if any)
			}
		);
	},
	insertOne : function() {
		connection.query('SELECT * FROM `books` WHERE `author` = "David"', function(error, results, fields) {
  			// error will be an Error if one occurred during the query
  			// results will contain the results of the query
  			// fields will contain information about the returned results fields (if any)
			}
		);
	},
	updateOne : function() {
		connection.query('SELECT * FROM `books` WHERE `author` = "David"', function(error, results, fields) {
  			// error will be an Error if one occurred during the query
  			// results will contain the results of the query
  			// fields will contain information about the returned results fields (if any)
			}
		);
	}
};

module.exports = orm;
