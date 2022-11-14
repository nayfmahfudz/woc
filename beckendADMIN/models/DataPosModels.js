let db = require("../config/config.js");
let axios  = require('axios');
let moment  = require('moment');
var date = new Date();
let tokenSih3 = async function tokenSih3() {
    return await axios.post(`http://sih3.dpuair.jatimprov.go.id/oauth/token`,
     { "username": "brantas", "password": "123123", "grant_type": "password", "client_id": "2", "client_secret": "rdsIWQ8uMd5pQXxU4mmAaEiA1doMz5bHtoevLxRC" }
 ).then(response => {      
     console.log( response.data.access_token)
 return response.data.access_token ;
 });
 }
let token = async function token() {
   return await axios.post(`http://103.53.78.162/api/v2/auth`,
    { "username": "system", "password": "system" }
).then(response => {      
    console.log( response.data.token)
return response.data.token ;
});
}
exports.getDataPos = async (result) => {
    const config = {
        headers: { Authorization: `Bearer ${await token().then(response => {return response})}`,
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": " GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Content-Length, Accept-Encoding",
        "Access-Control-Allow-Credentials": "false",
    }
    };
         axios.get(`http://103.53.78.162/api/v2/station`, config).then(response => {
            result(null, response.data.items);
    });
}
exports.insertCH =  async (data, result) => {
        const config = {
        headers: { Authorization: `Bearer ${await token().then(response => {
            return response})}`,
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": " GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Content-Length, Accept-Encoding",
        "Access-Control-Allow-Credentials": "false",
    }
    };

    for(let element of data) {
        let send ={
            "dt":element.date,
            "t": moment(new Date()).format("H:m:s"),
            "v": element.Nilai,
            }
        await  axios.post(`http://103.53.78.162/api/v2/rain/${element.id}/manual`,send ,config).then(response => {console.log(response.data)});   
    }
    const configb = {
        headers: { Authorization: `Bearer ${await tokenSih3().then(response => {
            return response})}`,
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": " GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Content-Length, Accept-Encoding",
        "Access-Control-Allow-Credentials": "false",
    }
    };
    for(let element of data) {
        let send ={
            "id_pos":element.sih3,
            "tahun": moment(element.date).format('YYYY'),
            "bulan":moment(element.date).format('MM'),
            "tanggal": moment(element.date).format('DD'),
            "data": element.Nilai,
            "jam": moment(new Date()).format('H'),
            }
            console.log(send);
            if(element.sih3!="" && element.sih3!=null){
                try {
                    await  axios.post(`http://sih3.dpuair.jatimprov.go.id/api/post_data`,send ,configb).then(response => {console.log(response.data)}); 
                } catch (error) {
                    console.log(error)
                }
    }
}
    result(null, true);
}
// Get All Products
exports.getDataPos = async (result) => {
    const config = {
        headers: { Authorization: `Bearer ${await token().then(response => {return response})}`,
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": " GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Content-Length, Accept-Encoding",
        "Access-Control-Allow-Credentials": "false",
    }
    };
    let datapos= [];
        await axios.get(`http://103.53.78.162/api/v2/station`, config).then(async response => {
            await response.data.items.forEach( async element => {
                let id = element.id;
                await getDataPosByIdRemote( id , (err, results) => {
                     if(err){
        
                     }else{
                         element.sih3 = results.id_sih3;
                         datapos.push( element);
                         response.data.items.length == datapos.length? result(null, datapos):null;
                     }
                 })
             })
            
    });
    
}
exports.liveDataPos = async (result) => {
   
    const config = {
        headers: { Authorization: `Bearer ${await token().then(response => {
            return response})}`,
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": " GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Content-Length, Accept-Encoding",
        "Access-Control-Allow-Credentials": "false",
    }
    };
       await  axios.get(`http://103.53.78.162/api/v2/station`, config).then(async (response) => {
        dataLive= [];
              for(const element of response.data.items) {
               
           
                if(element.rain==true){
                    await axios.get(`http://103.53.78.162/api/v2/rain/${element.id}/manual/${moment(new Date()).format("yyyy-MM-d")}`, config).then( (response) => {
                        element.tanggal =response.data.dt;
                        element.jam =response.data.t;
                        element.nilai =response.data.v;
                        element.foto =response.data.attachment_id;
                        dataLive.push(element) ;
                        console.log("1");
                    });
                   
                }
            }
             result(null, dataLive);
    });
   
}

exports.getDataToken = (result) => {
    axios.post(`http://103.53.78.162/api/v2/auth`,
                    { "username": "system", "password": "system" }
                ).then(response => {      
                    console.log(response.data.token);
            result(null, response.data.token);
        })
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
async function getDataPosByIdRemote  (id, result)  {
     db.db.query("SELECT id_sih3 FROM data_pos WHERE id_remote = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
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

exports.insertToken = async (data, result) => {
    db.db.query("INSERT INTO token SET ?", data, (err, results) => {             
        if(err) {
            result(error, null);
        } else {
            result(null, respon);
            respon=results;
        }
    });
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

