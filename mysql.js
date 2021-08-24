var mysql      = require('mysql');
const config = require('./config/defalut.json');
//const dbConfig = config.get('hostConnection');

var connection = mysql.createConnection(config.hostConnection);

// connection.connect();

// var sql = {
//     getList : function(callback){
//         connection.query('SELECT * FROM bml_contents', function(err, results, fields) {
//             if (err) {
//               console.log(err);
//             }
//             return callback(results)
//           });
//     }

    
// }

module.exports = connection;