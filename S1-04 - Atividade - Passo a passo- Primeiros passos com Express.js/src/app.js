const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	response.send('Hello Linux');
});

app.listen(port, () => {
	console.log(`App rodando na porta ${port}`);
});

app.get('/frutas', (request, response) => {
	console.log(`frutas rodando na porta ${port}`);
});

app.get('/verduras', (request, response) => {
	console.log(`verduras rodando na porta ${port}`);
});

app.get('/doces', (request, response) => {
	console.log(`Doces rodando na porta ${port}`);
});
