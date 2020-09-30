const express   = require("express");
const path      = require("path");
const PORT      = process.env.PORT || 3001;
const HTTPSPORT = process.env.PORT || 5000;
const app       = express();
var http        = require('http');
var https       = require('https');
var fs          = require('fs');

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var options = {
  key: fs.readFileSync('conf/key.pem'),
  cert: fs.readFileSync('conf/cert.pem'),
};

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

http.createServer(app).listen(PORT, function(){
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

https.createServer(options, app).listen(HTTPSPORT, function(){
  console.log(`🌎 ==> Server now on port ${HTTPSPORT}!`);
});
