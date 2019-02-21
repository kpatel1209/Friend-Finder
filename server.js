// Dependencies
const express = require("express");
const path = require("path");

// Express configuration that tells node we are creating an "express" server
const app = express();

// Set initial PORT to use in the listener
const PORT = process.env.PORT || 8080;

// Sets Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files for images, CSS files, and JS files
app.use(express.static(path.join(__dirname, "app/public")));

// Routers that point the server to the "route" files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener that starts the server
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});