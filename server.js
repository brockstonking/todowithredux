const express = require('express');
require('dotenv').config();
const massive = require('massive');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const session = require('express-session');
const path = require('path');

const app = express();

app.use( (req, res, next) => {
  console.log(Date(), req);
  next();
})


const { PORT, DATABASE_URL, SESSION_SECRET } = process.env;

app.use(cors());
app.use(bodyParser.json());

massive(DATABASE_URL)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(express.json());

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1200000 }
}))


app.use(require('./router/router'));

app.use(express.static(path.join(__dirname, '/build')));



var server_host = '0.0.0.0';
const port = PORT || 4015

app.get('/*', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, "build")
  })
});



app.listen(port, server_host, () => {
    console.log(`Listening on port ${ port }`);
})