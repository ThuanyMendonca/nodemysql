var model = require('../Model/Voto.js');

module.exports = {
	inicio,
	listaVoto,
	alteraVoto,
	deletaVoto,
	adicionaVoto,
	listaVotoById,
	add,
	mostraAlterar,
}

function mostraAlterar(req, res){
	var id = req.params.can_codigo;
	model.listarVotoById(id, function(err, data){
		if (err) {
			throw err;
		}
		console.log(data);
		res.render('../app/View/alteraVoto.ejs', {voto: data[0]});
	})
}

function alteraVoto(req, res){
	var id = req.params.can_codigo;
	model.alterarVoto(req.params.can_codigo, req.body, function(err, data){
		if(err){
			throw err;
		}
		res.redirect('/listaVoto');
	});
}

function inicio(req, res){
	// Página inicial
	res.render('../app/View/index.ejs')
}


function listaVoto(req, res){
	model.listarVoto(function(err, data){
		if (err){
			throw err;
		}
		// console.log(data);
		res.render('../app/View/listaVoto.ejs',{ voto: data });

	})
}

function listaVotoById(req, res){
	var id = req.params.can_codigo;
	model.listarVotoById(id, function(err, data){
		if(err){
			throw err;
		}
		res.render('../app/View/listaVotoById.ejs');
	})
}

function listaVotoById(req, res){
	var id = req.params.can_codigo;
	model.listarVotoById(id, function(err, data){
		if(err){
			throw err;
		}
		res.render('../app/View/listaVoto',{ voto: data });
	})
}

function deletaVoto(req, res){
	var id = req.params.can_codigo;
	model.deletarVoto(id, function(err, data){
		if(err){
			throw err;
		}
		res.redirect('/listaVoto');
	})
}

function adicionaVoto(req, res){
	var dados = req.body;
	// console.log(dados);
	model.adicionarVoto(dados,function(err, data){
		if(err){
			throw err;
		}
		res.render('../app/View/adicionaVoto.ejs', {voto: data});
	})
}

function add(req, res){
	model.listarVoto(function(err, data){
		if(err){
			throw err;
		}
		res.render('../app/View/adicionaVoto.ejs', {voto: data})
	});

}