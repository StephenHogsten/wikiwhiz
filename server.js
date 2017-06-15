require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const request = require('request');

const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err) console.log('mongoose connection error', err);   // eslint-disable-line
});


const app = express();


// app.use('/public', express.static('public'));

app.use('/api', require('./src/server/ApiRoutes'));

var sessionOptions = {
  secret: process.env.SECRET || 'default0secret',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
};
if (process.env.ENV_TYPE === 'PRODUCTION') {
  sessionOptions.cookie = {secure: true};
  app.set('trust proxy', 1);
}
app.use(session(sessionOptions));
app.use(bodyParser.json());

app.use(/^(?!\/?public\/)/, (req, res, next) => {
  console.log('req.url');
  console.log(typeof(req.url));
    // figure out the cleanest way to change the url
  next();
})

app.use(webpackMiddleware(
  webpack(webpackConfig),
  {
    lazy: true,   // no watching, but recompiles each request
    publicPath: webpackConfig.output.publicPath,
    index: "generatedIndex.html"
  }
));

app.get('*', (req, res, next) => {
  console.log(req);
  req.path = '/public/generatedIndex.html';
  next('route')
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('listening on port ', port);  // eslint-disable-line
});