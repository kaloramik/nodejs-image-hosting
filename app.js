
var express = require('express')
  , http = require('http')

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.bodyParser());
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  //app.set('view cache', true);
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'))
});
app.get("/", function (req, res) {
  res.render("home.jade", { title: "this is a title"});
});

var server = http.createServer(app);
server.listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});
