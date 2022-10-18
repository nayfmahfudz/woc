let { deleteizinById,getizin,getizinById,insertizin,updateizinById } = require("../models/izinModels.js");
 
// Get All Izins
exports.showIzin = (req, res) => {
    // console.log(req);
    getizin((err, results) => {
        if (err){
            console.log(err);
            res.send(err);
        }else{
            console.log(results);
            res.json(results);
        }
    });
}
 
// Get Single Izin 
exports.showIzinById = (req, res) => {
    getizinById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json({status:"succes",data:results});
        }
    });
}
 
// Create New Izin
exports.createIzin = (req, res) => {
    const data = req.body;
    insertizin(data, (err, results) => {
        if (err){
            res.json("Data Tidak Tersimpan");
        }else{
            res.json("Data Tersimpan");
        }
    });
}
 
// Update Izin
exports.updateIzin = (req, res) => {
    console.log(req.params.id)
    const data  = req.body;
    const id    = req.params.id;
    updateizinById(data, id, (err, results) => {
        if (err){
            res.json("Data Tidak Terupdate");
        }else{
            res.json("Data Terupdate");
        }
    });
}
 
// Delete Izin
exports.deleteIzin = (req, res) => {
    const id = req.params.id;
    deleteizinById(id, (err, results) => {
        if (err){
            res.json("Data Tidak Terhapus");
        }else{
            res.json("Data Terhapus");
        }
    });
}
 