import express, { Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { REPLCommand } from "repl";
import Facture from "./facture";
import { json } from "stream/consumers";
import facture from "./facture";
import cors from "cors";
const app = express();
const PORT = 6000;
app.use(bodyParser.json());
app.use(cors());
const url = "mongodb://localhost:27017/db_facturation";
mongoose.connect(url, (error) => {
  if (error) console.log(error);
  else console.log("Mongo database connected successfully");
});
app.get("/", (req, resp) => {
  resp.send("Hello express");
});
app.listen(PORT, () => {
  console.log("Server started at http://localhost:${PORT}");
});

app.get("/facture", (req: Request, resp: Response) => {
  Facture.find((err, facture) => {
    if (err) resp.status(500).send(err);
    else resp.send(facture);
  });
});
app.post("/facture", (req: Request, resp: Response) => {
  let facture = new Facture(req.body);
  facture.save((err) => {
    if (err) resp.status(500).send(err);
    else resp.send(facture);
  });
});
app.listen(5000, () => console.log("serveur marche  bien"));

/* mongoose.connect('mongodb+srv://sirine:sirine@cluster0.elclxzi.mongodb.net/?retryWrites=true&w=majority',(err,done)=>
{if (err)
{console.log(err)}
if (done){
    console.log("base de donne connecté avec success!");
}}
); */
