var client = require('../../config/database');
var tabela1 = "candidato";

module.exports = {
	listarCandidato,
	listarCandidatoById,
	alterarCandidato,
	deletarCandidato,
	adicionarCandidato
}

function listarCandidato (callback){
    client.query('SELECT * FROM ' + tabela1, callback);
}

function listarCandidatoById(id, callback){
	client.query('SELECT * FROM ' + tabela1 + ' WHERE can_codigo = ' + id, callback);
}

function alterarCandidato(dados, callback) {
	var msql = "UPDATE " + tabela1 + " SET can_candidato = '" + dados.can_candidato +"' , can_partido = '" + dados.can_partido + "' , can_sigla = '" + dados.can_sigla + "' , can_fundacao = '" + dados.can_fundacao + "' , can_cargo = " + dados.can_cargo + " WHERE can_codigo = " + dados.can_codigo;
    client.query(msql, callback);
}

function deletarCandidato(id,callback){
	client.query('DELETE FROM '+ tabela1 + ' WHERE can_codigo = ' + id, callback);
}

function adicionarCandidato(dados, callback) {
	var msql = 'INSERT INTO ' + tabela1 + ' SET ? ';
	console.log(dados);
	client.query(msql, dados, callback);
}
