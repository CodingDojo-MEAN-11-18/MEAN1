const parser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();
// const port = process.env.PORT ? process.env.PORT : 8000;
const port = process.env.WEB_PORT || 8000;
const logger = require('./server/middleware/logger');

const names = ['Adam', 'Jason', 'Chris', 'Ana', 'Nicci'];


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(parser.urlencoded({ extended: true }));
app.use(logger);

function loggedIn(request, response, next) {
  console.log(next);

  next(new Error('you are not logged in'));
}


app.get('/', function (request, response) {
  // console.log('got to index', request);

  response.render('index');
});

app.post('/names', [loggedIn], function (request, response) {
  console.log('posting', request.body);

  names.push(request.body.name);

  response.render('results', {
    name: request.body.name,
    names
  });

  // response.redirect('/');
});

app.get('/names/:index', [loggedIn], function (request, response) {
  console.log(request.params);
  response.send(names[request.params.index]);
});

app.use(function (error, request, response, next) {
  console.log('handling error', error.message);

  next(error);
});

app.use(function (error, request, response, next) {
  response.send(error.message);
})


console.log(port);
app.listen(port, () => console.log(`Express server listening on port ${port}`));
