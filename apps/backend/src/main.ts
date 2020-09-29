import * as express from "express";
import * as mongoose from "mongoose";
import HashApi from "./app/route/HashApi";
import GeneratorApi from "./app/route/GeneratorApi";

const db = mongoose.connection;
db
  .on("error",()=>console.log("Connected to the database could not be completed"))
  .on("open",()=>console.log("Connected to the database"));
mongoose.connect("mongodb://localhost:27017");

const app = express();
app.use(express.json());

app.use("/",HashApi);
app.use("/",GeneratorApi);

app.listen(3000, function() {
    console.log('App de Exemplo escutando na porta 3000!');
});

export default {};
