const express = require("express");
const app = express();
const path = require("path");

const loc = __dirname;

app.use(express.static(loc));

app.listen(8080, () => {
    console.log("created");
});