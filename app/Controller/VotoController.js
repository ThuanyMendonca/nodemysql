// var model = require('../Model/Voto.js');

// module.exports = {
// 	paginaInicial,
// 	listaVoto,
// 	alteraVoto,
// 	deletaVoto,
// 	adicionaVoto,
// 	listaVotoById
// }

// function paginaInicial(req, res){
// 	// Página inicial
// 	res.render('../app/View/index.js')
// }

// function listaVoto(req, res){
// 	model.listarVoto(function(err, data){
// 		if (err){
// 			throw err;
// 		}
// 		res.render('../app/View/listaVoto.ejs', {voto: data});

// 	})
// }

// function listaVotoById(req, res){
// 	var id = req.params.codigo;
// 	model.listarVotoById(id, function(err, data){
// 		if(err){
// 			throw err;
// 		}
// 		res.render('../app/View/listaVotoById.ejs', {voto: data});

// 	})
// }

// function alteraVoto(req, res){
// 	var id = req.params.vot_codigo;
// 	model.alterarVoto(id, function(err, data){
// 		if(err){
// 			throw err;
// 		}
// 		res.render('../app/View/alteraVoto.ejs', {voto: data});
// 	});
// }


// function deletaVoto(req, res){
// 	model.deletarVoto(id, function(err, data){
// 		if(err){
// 			throw err;
// 		}
// 		res.render('../app/View/deletaVoto.ejs', { voto: data });
// 	})
// }

// function adicionaVoto(req, res){
// 	model.adicionarVoto(function(err, data){
// 		if(err){
// 			throw err;
// 		}
// 		res.render('../app/View/adicionaVoto.ejs', {voto: data});
// 	})
// }