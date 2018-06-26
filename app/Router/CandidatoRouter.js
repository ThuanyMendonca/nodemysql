var controller = require('../Controller/CandidatoController');

app.get('/listaCandidato', controller.listaCandidato);
app.get('/listaCandidatoById', controller.listaCandidatoById);

// app.post('/alteraCandidato/:can_codigo', controller.alteraCandidato);
app.get('/candidato',controller.add);
app.post('/candidato/novo',controller.adicionaCandidato);

app.get('/deletaCandidato/:can_codigo', controller.deletaCandidato);


// app.post('listaCandidato/alteraCandidato/:can_codigo', controller.alteraCandidato);
app.get('/alteraCandidato/:can_codigo', controller.mostraAlterar);


app.get('/candidato/deletar/:can_codigo', controller.deletaCandidato);


app.get('/inicio', controller.inicio);






