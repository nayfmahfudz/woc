let {insertCH,liveDataPos,getDataToken,insertDataPosda, insertToken,getDataPosda,deleteDataPosById,getDataPos,getDataPosById,insertDataPos,updateDataPosById ,insertLaporanDataPos} = require("../models/DataPosModels.js");
 
// Get All DataPoss
exports.showDataPos = (req, res) => {
    // console.log(req);
    getDataPos((err, results) => {
        if (err){
            res.send(err);
        }else{
            
            res.json(results);
        }
    });
}
exports.liveCH = (req, res) => {
    liveDataPos((err, results) => {
        if (err){
            res.json(err);
        }else{
            res.json(results);
        }
    });
}
exports.createToken = (req, res) => {
    const data = req.body;
    insertToken(data, (err, results) => {
        console.log(data);
        if (err){
            res.json("Data Tidak Tersimpan");
        }else{
            res.json("Data Tersimpan");
        }
    });
}
exports.datach = (req, res) => {
    const data = req.body;
    insertCH(data, (err, results) => {
        
        if (err){
            res.json("Data Tidak Tersimpan");
        }else{
            res.json("Data Tersimpan");
        }
    });
}
exports.showToken = (req, res) => {
    // console.log(req);
    getDataToken((err, results) => {
        if (err){
            console.log(err);
            res.send(err);
        }else{
            console.log(results);
            
            res.json(results);
        }
    });
}
exports.showDataPosda = (req, res) => {
    // console.log(req);
    getDataPosda((err, results) => {
        if (err){
            console.log(err);
            res.send(err);
        }else{
            console.log(results);
            
            res.json(results);
        }
    });
}
 
// Get Single DataPos 
exports.showDataPosById = (req, res) => {
    getDataPosById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json({status:"succes",data:results});
        }
    });
}
 
// Create New DataPos
exports.createDataPos = (req, res) => {
    const data = req.body;
    insertDataPos(data, (err, results) => {
        console.log(data);
        if (err){
            res.json("Data Tidak Tersimpan");
        }else{
            res.json("Data Tersimpan");
        }
    });
}

exports.createDataPosda = (req, res) => {
    const data = req.body;
    insertDataPosda(data, (err, results) => {
        console.log(data);
        if (err){
            res.json("Data Tidak Tersimpan");
        }else{
            res.json("Data Tersimpan");
        }
    });
}
// Create New DataPos
exports.createLaporanDataPos = (req, res) => {
    const data = req.body;
    insertLaporanDataPos(data, (err, results) => {
        if (err){
            res.json("Data Tidak Tersimpan");
        }else{
            res.json("Data Tersimpan");
        }
    });
}
 
// Update DataPos
exports.updateDataPos = (req, res) => {
    console.log(req.params.id)
    const data  = req.body;
    const id    = req.params.id;
    updateDataPosById(data, id, (err, results) => {
        if (err){
            res.json("Data Tidak Terupdate");
        }else{
            res.json("Data Terupdate");
        }
    });
}
 
// Delete DataPos
exports.deleteDataPos = (req, res) => {
    const id = req.params.id;
    deleteDataPosById(id, (err, results) => {
        if (err){
            res.json("Data Tidak Terhapus");
        }else{
            res.json("Data Terhapus");
        }
    });
}
 