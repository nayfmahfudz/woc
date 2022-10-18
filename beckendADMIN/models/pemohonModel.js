let db = require("../config/config.js");

var date = new Date();
// Get All Products
exports.login = (data,result) => {
    console.log(data.user);
    db.db.query("SELECT * FROM user WHERE user = ? && password = ?",[data.user,data.password] ,(err, results) => {             
        if(err) {
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
exports.getPermohonan = (result) => {
    db.db.query("SELECT permohonan.kabidop as kabidop,permohonan.subkor as subkor,permohonan.rekomtek as rekomtek,permohonan.kabagtu as kabagtu,permohonan.sumber as sumber,permohonan.longititude as longititude, permohonan.latitude as latitude,permohonan.SK as sk ,permohonan.debit_liter as debit_detik,permohonan.lokasi as lokasi,"
    +"permohonan.no_pemohon as no_pemohon,permohonan.NPWP as NPWP ,permohonan.tanggal_pemohon as tanggal_pemohon,permohonan.luas as luas,permohonan.infrastruktur as infrastruktur,permohonan.izin as izin,permohonan.komoditas as komoditas, permohonan.createdAt as dibuat,permohonan.modified as diubah, permohonan.nama as nama_pemohon ,permohonan.email as email ,status.hari as hari,status.nama as status,status.deskripsi as deskripsi_status,permohonan.deskripsi as dekripsi_user,izin.nama as izin,permohonan.noid as usernoid FROM permohonan LEFT JOIN status  ON permohonan.status = status.id LEFT JOIN izin  ON permohonan.izin = izin.id", (err, results) => {             
        if(err) {
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Product
exports.getPermohonanById = (id, result) => {
    db.db.query("SELECT permohonan.kabidop as kabidop,permohonan.subkor as subkor,permohonan.rekomtek as rekomtek,permohonan.kabagtu as kabagtu,permohonan.sumber as sumber,permohonan.longititude as longititude, permohonan.latitude as latitude,permohonan.SK as sk ,permohonan.debit_liter as debit_detik,permohonan.lokasi as lokasi,"
    +"permohonan.no_pemohon as no_pemohon ,permohonan.NPWP as NPWP ,permohonan.tanggal_pemohon as tanggal_pemohon,permohonan.luas as luas,permohonan.infrastruktur as infrastruktur,izin.nama as izin,permohonan.komoditas as komoditas, permohonan.createdAt as dibuat,permohonan.modified as diubah, permohonan.nama as nama_pemohon , status.hari as hari,permohonan.email as email ,status.id as statusId,status.nama as status,status.deskripsi as deskripsi_status,permohonan.deskripsi as dekripsi_user,permohonan.noid as usernoid   FROM permohonan LEFT JOIN status  ON permohonan.status = status.id LEFT JOIN izin  ON permohonan.izin = izin.id WHERE noid = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
exports.getPermohonanByNama = (id, result) => {
   
    id.replace('%20','');
     console.log(id);
    db.db.query("SELECT permohonan.sumber as sumber,permohonan.longititude as longititude, permohonan.latitude as latitude,permohonan.SK as sk ,permohonan.debit_liter as debit_detik,permohonan.lokasi as lokasi,"
    +"permohonan.no_pemohon as no_pemohon ,permohonan.NPWP as NPWP ,permohonan.tanggal_pemohon as tanggal_pemohon,permohonan.luas as luas,permohonan.infrastruktur as infrastruktur,permohonan.izin as izin,permohonan.komoditas as komoditas, permohonan.createdAt as dibuat,permohonan.modified as diubah, permohonan.nama as nama_pemohon , status.hari as hari,permohonan.email as email ,status.id as statusId,status.nama as status,status.deskripsi as deskripsi_status,permohonan.deskripsi as dekripsi_user,permohonan.noid as usernoid   FROM permohonan LEFT JOIN status  ON permohonan.status = status.id WHERE permohonan.nama LIKE ?", ["%"+id+"%"], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Insert Product to Database
exports.insertPermohonan = (data, result) => {
    data.createdAt = date;
    data.modified = date;
    db.db.query("INSERT INTO permohonan SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Product to Database
exports.updatePermohonanById = (data, id, result) => {
    if(!!data.modified)data.modified = new Date();
    console.log(data.modified);
    db.db.query("UPDATE permohonan SET tanggal_pemohon = ? , luas = ?,komoditas = ?,infrastruktur = ?,sumber = ?,longititude = ?,latitude = ?,SK = ?,debit_liter = ?,lokasi = ?,izin = ?,nama = ?,email = ? , modified = ? , status = ? , NPWP = ? WHERE noid = ?", 
    [data.tanggal_pemohon,data.luas,data.komoditas, data.infrastruktur, data.sumber,data.longititude,data.latitude, data.sk, data.debit_liter,data.lokasi,data.izin, data.nama, data.email, data.modified, data.status,data.NPWP, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Product to Database
exports.deletePermohonanById = (id, result) => {
    db.db.query("DELETE FROM permohonan WHERE noid = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}   