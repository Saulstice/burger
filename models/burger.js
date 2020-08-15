var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(name, cb) {
        orm.create("burgers", name, function(res) {
            cb(res);
        });
    },
    update: function(condition, cb) {
        orm.update("burgers", condition, function(res) {
            cb(res);
        });
    }
};
