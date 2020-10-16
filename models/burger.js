// IMPORT ORM
const orm = require("../config/orm");

// MODEL TO CALL ORM FUNCTIONS
var burger = {
    selectAll: cb => {
        orm.selectAll("burgers", res => cb(res));
    },
    insertOne: (cols,vals,cb) => {
        orm.insertOne("burgers", cols, vals, res => cb(res));
    },
    updateOne: (objColVals, condition, cb) => {
        orm.updateOne("burgers",objColVals, condition, res => cb(res));
    }
};

// EXPORT
module.exports = burger;