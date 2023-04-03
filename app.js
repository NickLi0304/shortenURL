const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const routes = require("./routes");
require("./config/mongoose");

//app
const app = express();
const Port = 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

// 設定 port
app.listen(Port, () => {
  console.log(`App is running on http://localhost:${Port}`);
});
