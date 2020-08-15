var connection = require("./connection");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (burger, cb) {
        var query = "INSERT INTO burgers SET burger_name = " + burger;
        connection.query(query, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (burger, newBurger, cb) {
        var query = `UPDATE burgers SET burger_name = ${newBurger} WHERE burger_name = ${burger}`;
        connection.query(query, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}
