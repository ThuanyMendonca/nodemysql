var model = require('../Model/Candidato.js');

module.exports = {
	paginaInicial,
	listaCandidato,
	alteraCandidato,
	deletaCandidato,
	adicionaCandidato,
	listaCandidatoById
}

function alteraCandidato(req, res){
	var id = req.params.can_codigo;
	model.alterarCandidato(id, function(err, data){
		if(err){
			throw err;
		}
		res.render('../app/View/alteraCandidato.ejs', {candidato: data});
	});
}

function paginaInicial(req, res){
	// Página inicial
	res.render('../app/View/index.js')
}

function listaCandidato(req, res){
	model.listarCandidato(function(err, data){
		if (err){
			throw err;
		}
		// console.log(data);
		res.render('../app/View/listaCandidato.ejs',{ candidato: data });

	})
}

function listaCandidatoById(req, res){
	var id = req.params.can_codigo;
	model.listarCandidatoById(id, function(err, data){
		if(err){
			throw err;
		}
		res.render('../app/View/listaCandidatoById.ejs');
	})
}

function listaCandidatoById(req, res){
	var id = req.params.can_codigo;
	model.listarCandidatoById(id, function(err, data){
		if(err){
			throw err;
		}
		res.render('../app/View/listaCandidato',{ candidato: data });
	})
}

	function deletaCandidato(req, res){
		model.deletarCandidato(id, function(err, data){
			if(err){
				throw err;
			}
			res.render('../app/View/deletaCandidato.ejs');
		})
	}

	function adicionaCandidato(req, res){
		model.adicionarCandidato(function(err, data){
			if(err){
				throw err;
			}
			res.render('../app/View/adicionaCandidato.ejs');
		})
	}