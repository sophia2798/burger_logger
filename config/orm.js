var connection = require("../config/connection");
const { query } = require("express");

// HELPER FUNCTIONS FOR SQL SYNTAX
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
};

// HELPER FUNCTION TO CONVERT OBJECT PAIRS TO SQL SYNTAX
function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    return arr.toString();
};

var orm = {
    selectAll: (tableInput, cb) => {
        let queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err,result) => {
            if (err) throw err;
            cb(result);
        }); 
    },
    insertOne: (table, cols, vals, cb) => {
        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)}) `;

        console.log(queryString);

        connection.query(queryString, vals, (err,result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: (table,objColVals, condition, cb) => {
        let queryString =  `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;

        console.log(queryString);

        connection.query(queryString, (err,result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;