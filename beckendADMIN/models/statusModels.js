let db = require("../config/config.js");

var date = new Date();
// Get All Products
exports.getStatus = (result) => {
    db.db.query("SELECT * FROM status", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Product
exports.getStatusById = (id, result) => {
    db.db.query("SELECT * FROM status WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Product to Database
exports.insertStatus = (data, result) => {
    // data.createdAt = date;
    // data.modified = date;
    db.db.query("INSERT INTO status SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Product to Database
exports.updateStatusById = (data, id, result) => {
    data.modified = date;
    db.db.query("UPDATE status SET nama = ?, hari = ? , deskripsi = ? WHERE id = ?", [data.modified,data.nama, data.status, data.deskripsi,id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Product to Database
exports.deleteStatusById = (id, result) => {
    db.db.query("DELETE FROM status WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}   