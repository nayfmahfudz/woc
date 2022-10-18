let db = require("../config/config.js");

var date = new Date();
// Get All Products
exports.getizin = (result) => {
    db.db.query("SELECT * FROM izin", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Product
exports.getizinById = (id, result) => {
    db.db.query("SELECT * FROM izin WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Product to Database
exports.insertizin = (data, result) => {
    // data.createdAt = date;
    // data.modified = date;
    db.db.query("INSERT INTO izin SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Product to Database
exports.updateizinById = (data, id, result) => {
    db.db.query("UPDATE izin nama = ? , deskripsi = ? WHERE id = ?", [data.nama, data.deskripsi,id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Product to Database
exports.deleteizinById = (id, result) => {
    db.db.query("DELETE FROM izin WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}   