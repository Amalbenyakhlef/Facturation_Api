"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const facture_1 = __importDefault(require("./facture"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 6000;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
const url = "mongodb://localhost:27017/db_facturation";
mongoose_1.default.connect(url, (error) => {
    if (error)
        console.log(error);
    else
        console.log("Mongo database connected successfully");
});
app.get("/", (req, resp) => {
    resp.send("Hello express");
});
app.listen(PORT, () => {
    console.log("Server started at http://localhost:${PORT}");
});
app.get("/facture", (req, resp) => {
    facture_1.default.find((err, facture) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(facture);
    });
});
app.post("/facture", (req, resp) => {
    let facture = new facture_1.default(req.body);
    facture.save((err) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(facture);
    });
});
/* mongoose.connect('mongodb+srv://sirine:sirine@cluster0.elclxzi.mongodb.net/?retryWrites=true&w=majority',(err,done)=>
{if (err)
{console.log(err)}
if (done){
    console.log("base de donne connecté avec success!");
}}
); */
app.listen(5000, () => console.log("serveur marche  bien"));
