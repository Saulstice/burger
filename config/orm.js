var connection = require("./connection");

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (burgerName, cb) {
        var query = `INSERT INTO burgers SET burger_name = ${burgerName}`;
        connection.query(query, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (burgerID, newBurger, cb) {
        var query = `UPDATE burgers SET burger_name = ${newBurger} WHERE id= ${burgerID}`;
        connection.query(query, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;