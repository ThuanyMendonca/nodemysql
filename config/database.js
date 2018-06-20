var mysql = require('mysql');

var database = 'eleicao';

// criar instancia do banco de dados
var client = mysql.createConnection({
   user: 'root',
   password: '123456',
   host: '127.0.0.1',
   port: 3306
});

client.query('USE ' + database);

console.log('Mysql conectado com sucesso!');

module.exports = client;