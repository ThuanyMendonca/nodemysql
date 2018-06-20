var controller = require('../Controller/CandidatoController');

app.get('/listaCandidato', controller.listaCandidato);
app.get('/listaCandidatoById', controller.listaCandidatoById);

app.post('/alteraCandidato/:can_codigo', controller.alteraCandidato);
app.get('/candidato/novo', controller.adicionaCandidato);








