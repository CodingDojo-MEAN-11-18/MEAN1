const parser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();
// const port = process.env.PORT ? process.env.PORT : 8000;
const port = process.env.WEB_PORT || 8000;

const names = ['Adam', 'Jason', 'Chris', 'Ana', 'Nicci'];


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(parser.urlencoded({ extended: true }));


app.get('/', function (request, response) {
  // console.log('got to index', request);

  response.render('index');
});

app.post('/names', function (request, response) {
  console.log('posting', request.body);

  names.push(request.body.name);

  // response.render('results', {
  //   name: request.body.name,
  //   names
  // });

  response.redirect('/');
});

app.get('/names/:index', function (request, response) {
  console.log(request.params);
  response.send(names[request.params.index]);
});

console.log(port);
app.listen(port, () => console.log(`Express server listening on port ${port}`));
