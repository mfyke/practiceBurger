const connection = require('./connection.js');

const orm = {
	selectAll : (table,cb) => {
		const queryString = `select * from ${table};`;
		connection.query(queryString, (error, results, fields) => {
			if (error) {
				throw error;
			}
  			cb(results);
		});
	},
	insertOne : (table,colsToAdd, condition, cb) => {
		// const queryString;
		connection.query(queryString, (error, results, fields) => {
  			if (error) {
  				throw error
  			}
  			cb(results);
		});
	},
	updateOne : (table,colsToEdit,condition,cb) => {
		const queryString= `update ${table} set ${colsToEdit.name} = ${colsToEdit.value} where ${condition.name} = ${condition.value};`;
		connection.query(queryString, (error, results, fields) => {
  			if (error) {
  				throw error
  			}
  			cb(results);
		});
	}
};

module.exports = orm;
