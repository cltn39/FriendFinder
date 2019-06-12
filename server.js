const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
//parse request body as json
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
});