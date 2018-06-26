var model = require('../Model/Candidato.js');

module.exports = {
	inicio,
	listaCandidato,
	alteraCandidato,
	deletaCandidato,
	adicionaCandidato,
	listaCandidatoById,
	add,
	mostraAlterar,
}

function mostraAlterar(req, res){
	var id = req.params.can_codigo;
	model.listarCandidatoById(id, function(err, data){
		if (err) {
			throw err;
		}
		console.log(data);
		res.render('../app/View/alteraCandidato.ejs', {candidato: data[0]});
	})
}

function alteraCandidato(req, res){
	var id = req.params.can_codigo;
	model.alterarCandidato(req.params.can_codigo, req.body, function(err, data){
		if(err){
			throw err;
		}
		res.redirect('/listaCandidato');
	});
}

function inicio(req, res){
	// Página inicial
	res.render('../app/View/index.ejs')
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
	var id = req.params.can_codigo;
	model.deletarCandidato(id, function(err, data){
		if(err){
			throw err;
		}
		res.redirect('/listaCandidato');
	})
}

function adicionaCandidato(req, res){
	var dados = req.body;
	// console.log(dados);
	model.adicionarCandidato(dados,function(err, data){
		if(err){
			throw err;
		}
		res.render('../app/View/adicionaCandidato.ejs', {candidato: data});
	})
}

function add(req, res){
	model.listarCandidato(function(err, data){
		if(err){
			throw err;
		}
		res.render('../app/View/adicionaCandidato.ejs', {candidato: data})
	});

}