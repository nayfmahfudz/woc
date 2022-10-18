let mysql = require("mysql2");
  
// create the connection to database
exports.db = mysql.createPool({
  connectionLimit: 15,
  queueLimit: 10,
  host: '192.168.10.102',
  user: 'admin',
  password: 'sisdabr4nt4s',
  database: 'permohonan'
}); 
