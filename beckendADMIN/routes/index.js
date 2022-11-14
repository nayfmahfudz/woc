// import express
var express = require('express');
 
// import function from controller
let { loginUser,showPermohonan,showPermohonanByNama, showPermohonanById, createPermohonan, updatePermohonan, deletePermohonan } =require("../controller/permohonan.js");
let { showStatus, showStatusById, createStatus, updateStatus, deleteStatus } =require("../controller/status.js");
let {datach,liveCH,createToken,showToken,createDataPosda,showDataPosda, showDataPos, showDataPosById, createDataPos, updateDataPos, deleteDataPos } =require("../controller/DataPos.js");
 
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
router.get('/token', showToken);
router.post('/token', createToken);
router.post('/datach', datach);
// Create New Permohonan
router.post('/status', createStatus);
 
// Update Permohonan
router.put('/status/:id', updateStatus);
 
// Delete Permohonan
router.delete('/status/:id', deleteStatus);
router.get('/datapos', showDataPos);
router.get('/livedataposhujan', liveCH);
router.get('/dataposda', showDataPosda); 
// Get Single Permohonan
router.get('/datapos/:id', showDataPosById);
 
// Create New Permohonan
router.post('/datapos', createDataPos);
router.post('/dataposda', createDataPosda);
 
// Update Permohonan
router.put('/datapos/:id', updateDataPos);
 
// Delete Permohonan
router.delete('/datapos/:id', deleteDataPos);
module.exports = router;
