var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    create: function(name, cb) {
        orm.insertOne(name, function(res) {
            cb(res);
        });
    },
    update: function(burgerID, cb) {
        orm.updateOne(burgerID, function(res) {
            cb(res);
        });
    }
};


module.exports = burger;