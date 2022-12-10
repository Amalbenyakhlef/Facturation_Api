import mongoose from "mongoose";
import mongoosePaginate  from "mongoose-paginate";
let productShema=new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:String,required:true},
    quantity:{type:Number,required:true,default:0},
    selected:{type:Boolean,required:true,default:true},
    available:{type:Boolean,required:true,default:true}
    
});
productShema.plugin(mongoosePaginate);
const Product=mongoose.model("Product",productShema);
export default Product;