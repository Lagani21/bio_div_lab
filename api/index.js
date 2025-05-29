const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const projects = require('../routes/projects');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Biodiversity Lab' });
});

app.use('/projects', projects);

module.exports = app;
module.exports.handler = serverless(app);
