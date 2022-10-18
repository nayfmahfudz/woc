// import express
var express = require('express');
 
// import function from controller
let { loginUser,showPermohonan,showPermohonanByNama, showPermohonanById, createPermohonan, updatePermohonan, deletePermohonan } =require("../controller/permohonan.js");
let { showStatus, showStatusById, createStatus, updateStatus, deleteStatus } =require("../controller/status.js");
let { showIzin, showIzinById, createIzin, updateIzin, deleteIzin } =require("../controller/izin.js");
 
// init express router
const router = express.Router();
router.get('/', function name(req,res) {
    res.json({"test":"welcome surat permohonan"})
});
router.post('/login', loginUser);
// Get All Permohonan
router.get('/permohonan', showPermohonan);
 
// Get Single Permohonan
router.get('/permohonan/:id', showPermohonanById);

router.get('/namapermohonan/:id', showPermohonanByNama);
 
// Create New Permohonan
router.post('/permohonan', createPermohonan);
 
// Update Permohonan
router.put('/permohonan/:id', updatePermohonan);
 
// Delete Permohonan
router.delete('/permohonan/:id', deletePermohonan);
// Get All Permohonan
router.get('/status', showStatus);
 
// Get Single Permohonan
router.get('/status/:id', showStatusById);
 
// Create New Permohonan
router.post('/status', createStatus);
 
// Update Permohonan
router.put('/status/:id', updateStatus);
 
// Delete Permohonan
router.delete('/status/:id', deleteStatus);
router.get('/izin', showIzin);
 
// Get Single Permohonan
router.get('/izin/:id', showIzinById);
 
// Create New Permohonan
router.post('/izin', createIzin);
 
// Update Permohonan
router.put('/izin/:id', updateIzin);
 
// Delete Permohonan
router.delete('/izin/:id', deleteIzin);
module.exports = router;
