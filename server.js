const express    = require("express");
const bodyParser = require("body-parser");
const path       = require("path");

const app = express();
const port = process.env.PORT || 8080;

//LOAD MIDDLEWARE (BODYPARSER & EXPRESS STATIC DIRECTORY)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/assets")));

// require("./app/routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(port, function() {
  console.log("App is running on port " + port);
});