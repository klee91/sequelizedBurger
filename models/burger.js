var orm = require("../config/orm.js");

var burgers = {
    all: function(cb) {
        orm.selectAll("*", "burgers", function(res) {
            cb(res);    
        });
    },
    insert: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(res) {
            cb(res);
        })
    },
    update: function(val, condition, cb) {
        orm.updateOne("burgers", val, condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burgers;