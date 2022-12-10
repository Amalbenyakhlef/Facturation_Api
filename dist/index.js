"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const product_1 = __importDefault(require("./product"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 5000;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
const url = "mongodb://localhost:27017/catalogue";
mongoose_1.default.connect(url, (error) => {
    if (error)
        console.log(error);
    else
        console.log('Mongo database connected successfully');
});
app.get('/', (req, resp) => {
    resp.send('Hello express');
});
app.listen(PORT, () => {
    console.log('Server started at http://localhost:${PORT}');
});
app.get('/products', (req, resp) => {
    product_1.default.find((err, product) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(product);
    });
});
app.post('/products', (req, resp) => {
    let product = new product_1.default(req.body);
    product.save((err) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(product);
    });
});
