let db = require("../config/config.js");

var date = new Date();
// Get All Products
exports.getDataPos = (result) => {
    db.db.query("SELECT * FROM data_pos where kode_pos = 0", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

exports.getDataPosda = (result) => {
    db.db.query("SELECT * FROM data_pos where kode_pos = 1", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
// Get Single Product
exports.getDataPosById = (id, result) => {
    db.db.query("SELECT * FROM data_pos WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Insert Product to Laporan
exports.insertLaporanDataPos = async (data, result) => {
    error=null;
    respon="";
    await data.forEach(element => {
    db.db.query("INSERT INTO laporan SET ?", element, (err, results) => {             
        if(err) {
            console.log(err);
           eroor=err;
        } else {
            respon=results;
        }
    });
});
error!==null?result(error, null):result(null, respon);  
}
// Insert Product to Database
exports.insertDataPos = async (data, result) => {
    error=null;
    respon="";
    await data.forEach(element => {
    element.kode_pos=0; 
    db.db.query("INSERT INTO data_pos SET ?", element, (err, results) => {             
        if(err) {
            console.log(err);
           eroor=err;
        } else {
            respon=results;
        }
    });
});
error!==null?result(error, null):result(null, respon);  
}

exports.insertDataPosda = async (data, result) => {
    error=null;
    respon="";
    await data.forEach(element => {
        element.kode_pos=1; 
    db.db.query("INSERT INTO data_pos SET ?", element, (err, results) => {             
        if(err) {
            console.log(err);
           eroor=err;
        } else {
            respon=results;
        }
    });
});
error!==null?result(error, null):result(null, respon);  
}
 
// Update Product to Database
exports.updateDataPosById = (data, id, result) => {
    db.db.query("UPDATE data_pos nama = ? , deskripsi = ? WHERE id = ?", [data.nama, data.deskripsi,id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Product to Database
exports.deleteDataPosById = (id, result) => {
    db.db.query("DELETE FROM data_pos WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}   