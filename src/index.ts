import express,{Request,Response} from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { REPLCommand } from 'repl';
import Product from './product';
import { json } from 'stream/consumers';
import product from './product';
import cors from 'cors';
const app=express();
const PORT=5000;
app.use(bodyParser.json());
app.use(cors());
const url="mongodb://localhost:27017/catalogue";
mongoose.connect(url,(error)=>{
    if(error) console.log(error);
    else 
    console.log('Mongo database connected successfully');
})
app.get('/',(req,resp)=>{
    resp.send('Hello express');
});
app.listen(PORT,()=>{console.log('Server started at http://localhost:${PORT}');
});

app.get('/products',(req:Request,resp:Response)=>{
    Product.find((err,product)=>{
        if (err) resp.status(500).send(err);
        else
        resp.send(product);
    });
   
});
app.post('/products',(req:Request,resp:Response)=>{
    let product =new Product(req.body);
    product.save((err)=>{
        if (err) resp.status(500).send(err);
        else
        resp.send(product);
    });
   
});

