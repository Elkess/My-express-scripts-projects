var express = require("express");
var app = express();
const port = 2003;
app.get("", (req, res) => {
  res.send("Hello Elkess !");
});

app.listen(port, () => {
  console.log(`your current port is:${port} `);
});
