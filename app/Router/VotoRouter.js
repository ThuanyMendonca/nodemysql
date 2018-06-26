var controller = require('../Controller/VotoController');

app.get('/listaVoto', controller.listaVoto);
app.get('/listaVotoById', controller.listaVotoById);

app.get('/voto',controller.add);
app.post('/voto/novo',controller.adicionaVoto);

app.get('/deletaVoto/:can_codigo', controller.deletaVoto);


app.get('/alteraVoto/:can_codigo', controller.mostraAlterar);


app.get('/voto/deletar/:can_codigo', controller.deletaVoto);


app.get('/inicio', controller.inicio);






