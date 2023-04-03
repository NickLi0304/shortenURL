const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//app
const app = express();
const Port = 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
// 連線異常
db.on("error", () => {
  console.log("mongodb error!");
});
// 連線成功
db.once("open", () => {
  console.log("mongodb connected!");
});

// 設定首頁路由
app.get("/", (req, res) => {
  res.render("index");
});

// 設定 port 3000
app.listen(Port, () => {
  console.log("App is running on http://localhost:3000");
});
