/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// server.js
import express from "express";
import path from "path";
import serveStatic from "serve-static";
const app = express();
app.use(serveStatic(path.resolve() + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);