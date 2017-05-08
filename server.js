require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err) console.log('mongoose connection error', err);   // eslint-disable-line
});


const app = express();

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
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/api', require('./src/server/ApiRoutes'));

app.get('*', (req, res) => {
  res.sendFile(
    path.join(process.cwd(), 'public', 'index.html')
  );
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('listening on port ', port);  // eslint-disable-line
});