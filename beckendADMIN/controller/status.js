let { getStatus, getStatusById, insertStatus, updateStatusById, deleteStatusById } = require("../models/statusModels.js");
 
// Get All Statuss
exports.showStatus = (req, res) => {
    // console.log(req);
    getStatus((err, results) => {
        if (err){
            console.log(err);
            res.send(err);
        }else{
            console.log(results);
            res.json(results);
        }
    });
}
 
// Get Single Status 
exports.showStatusById = (req, res) => {
    getStatusById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json({status:"succes",data:results});
        }
    });
}
 
// Create New Status
exports.createStatus = (req, res) => {
    const data = req.body;
    insertStatus(data, (err, results) => {
        if (err){
            res.json("Data Tidak tersimpan");
        }else{
            res.json("data tersimpan");
        }
    });
}
 
// Update Status
exports.updateStatus = (req, res) => {
    console.log(req.params.id)
    const data  = req.body;
    const id    = req.params.id;
    updateStatusById(data, id, (err, results) => {
        if (err){
            // res.send(err);
            res.json("Data Tidak terupdate");
        }else{
            res.json("data terupdate");
        }
    });
}
 
// Delete Status
exports.deleteStatus = (req, res) => {
    const id = req.params.id;
    deleteStatusById(id, (err, results) => {
        if (err){
            res.json("Data Tidak Terhapus");
        }else{
            res.json("Data Terhapus");
        }
    });
}
 