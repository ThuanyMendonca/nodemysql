var client = require('../../config/database');
var tabela1 = "voto";

module.exports = {
	listarVoto,
	listarVotoById,
	alterarVoto,
	deletarVoto,
	adicionarVoto
}

function listarVoto (callback){
    client.query('SELECT * FROM ' + tabela1, callback);
}

function listarVotoById(id, callback){
	client.query('SELECT * FROM ' + tabela1 + ' WHERE vot_codigo = ' + id, callback);
}

function alterarVoto(dados, callback) {
	var msql = "UPDATE " + tabela1 + " SET vot_eleito = '" + dados.vot_eleitor +"' , vot_nrotitulo = '" + dados.vot_titulo + "' , vot_nrourna = '" + dados.vot_nrourna + "' , vot_zonaeleitoral = '" + dados.vot_zonaeleitoral + "' , can_codigo = " + dados.can_codigo + " WHERE vot_codigo = " + dados.vot_codigo;
    client.query(msql, callback);
}

function deletarVoto(id,callback){
	client.query('DELETE FROM '+ tabela1 + ' WHERE vot_codigo = ' + id, callback);
}

function adicionarVoto(dados, callback) {
	var msql = 'INSERT INTO ' + tabela1 + ' SET ? ';
	console.log(dados);
	client.query(msql, dados, callback);
}
