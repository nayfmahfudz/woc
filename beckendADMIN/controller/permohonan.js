let {login,getPermohonanByNama, getPermohonan, getPermohonanById, insertPermohonan, updatePermohonanById, deletePermohonanById } = require("../models/pemohonModel.js");
const moment = require("moment");

function parseDate(str) {
    str = str +"";
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
} 

function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
}


exports.loginUser = (req, res) => {
    const data  = req.body;
    login(data, (err, results) => {
        if (err){
            res.json({status:"error",message:"User Tidak ditemukan",message:results});
        }else{
            if(results.length!==0){
            res.json({status:"succes",message:"Berhasil Login",user:results[0]})} else
                {res.json({status:"error",message:"User Tidak ditemukan",data:"data null"})}
            
        }
    });
}
// Get All Permohonans
exports.showPermohonan = async (req, res) => {
    let result =[]
   await getPermohonan((err, results) => {
        if (err){
            res.send(err);
        }else{results.forEach( (element) => {
           const int = parseInt(element.hari);
                let end = moment(new Date(element.diubah), "DD-MM-YYYY").add(int, 'days');
                console.log(end)
                element.h = moment(end).diff(Date(), 'days');
              result.push(element)
            });
            if(result.length == results.length ){
            const sorted = result.sort((a, b) => {  
                
                return  a.h - b.h
              })
            res.json(sorted);
        }}
    });
}
 
// Get Single Permohonan 
exports.showPermohonanById = (req, res) => {
    getPermohonanById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json({status:"succes",data:results});
        }
    });
}
exports.showPermohonanByNama = (req, res) => {
    getPermohonanByNama(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json({status:"succes",data:results});
        }
    });
}
 
// Create New Permohonan
exports.createPermohonan = (req, res) => {
    const data = req.body;
    insertPermohonan(data, (err, results) => {
        if (err){
            res.json("Data Tidak Tersimpan");
        }else{
            res.json("Data Tersimpan");
        }
    });
}
 
// Update Permohonan
exports.updatePermohonan = (req, res) => {
    console.log(req.params.id)
    const data  = req.body;
    const id    = req.params.id;
    updatePermohonanById(data, id, (err, results) => {
        if (err){
            res.json("Data Tidak Terupdate");
        }else{
            res.json("Data Terupdate");
        }
    });
}
 
// Delete Permohonan
exports.deletePermohonan = (req, res) => {
    const id = req.params.id;
    deletePermohonanById(id, (err, results) => {
        if (err){
            res.json("Data Tidak Terhapus");
        }else{
            res.json("Data Terhapus");
        }
    });
}
 