let mysql = require("mysql2");
  
// create the connection to database
exports.db = mysql.createPool({
  connectionLimit: 1000,
  queueLimit: 1000,
  host: '192.168.50.7',
  user: 'brantas',
  password: '',
  database: 'hub'
}); 
