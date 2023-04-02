const express = require("express");
const app = express();
const Port = 3000;

// 設定首頁路由
app.get("/", (req, res) => {
  res.send("hello world");
});

// 設定 port 3000
app.listen(Port, () => {
  console.log("App is running on http://localhost:3000");
});
