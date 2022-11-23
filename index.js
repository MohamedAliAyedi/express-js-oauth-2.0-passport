const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
require('./utils/passport');
const cookieSession = require('cookie-session')

const authRoute = require("./routes/Auth");
const homeRoute = require("./routes/Home");

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.use(cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2']
  }))

app.use(passport.initialize());
app.use(passport.session());


app.use("/", homeRoute);
app.use("/auth", authRoute);


app.listen(5000, () => {
    console.log(`
      🚀  Server is running!
      🔉  Listening on port 5000
      📭  Query at http://localhost:5000
  `);
  });
  