var express = require('express');
var app = express();
var path = require('path');
const session = require('express-session');




app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

var bodyParser = require('body-parser')




app.use(bodyParser.json())
app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/mongoose.js')
require('./server/config/routes_config.js')(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
const server = app.listen(8000, function(){
    console.log("listening on port 8000")
      });
const io = require('socket.io')(server);

