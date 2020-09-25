import express from "express";
import mongoose from "mongoose";
import HashApi from "./route/HashApi.js"

const db = mongoose.connection
db
  .on("error",()=>console.log("Connected to the database could not be completed"))
  .on("open",()=>console.log("Connected to the database"));
mongoose.connect("mongodb://localhost:27017");

var app = express();
app.use(express.json());

app.use("/",HashApi);

app.listen(3000, function() {
    console.log('App de Exemplo escutando na porta 3000!');
});
