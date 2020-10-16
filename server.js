// DEPENDENCIES & GLOBAL VARIABLES
const express = require("express");
const exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();

// EXPRESS SETTINGS
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exhbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// IMPORT ROUTES
const routes = require("./controllers/burgers_controllers");
app.use(routes);

// LISTEN
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
})