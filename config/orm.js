let connection = require("../config/connection.js");

let orm = {
    all: function(input, cb) {
        let queryString = "SELECT * FROM " + input + ";"
        connection.query(queryString, function(err, data){
            if (err) throw err;
            cb(data)
        })    
    },
    insert: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table + "(" + cols + ") VALUES ('" + vals + "');"
        connection.query(queryString, function(err, data){
            if (err) throw err;
            cb(data)
        })
    },
    update: function(table, col, val, id, cb) {
        let queryString = "UPDATE " + table + " SET " + col + " = '" + val + "' WHERE id=" + id + ";"
        connection.query(queryString, function(err, data){
            if (err) throw err;
            cb(data)
        })
    },
    delete: function(table, id, cb) {
        let queryString = "DELETE FROM " + table + " WHERE id=" + id + ";"
        connection.query(queryString, function(err, data){
            if (err) throw err;
            cb(data)
        })
    }
}

module.exports = orm