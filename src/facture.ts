import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";
let factureShema = new mongoose.Schema({
  title: { type: String, required: true },
  numero: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true, default: 0 },
  secteur: { type: String, required: true },
  paied: { type: Boolean, required: true, default: true },
  available: { type: Boolean, required: true, default: true },
});
factureShema.plugin(mongoosePaginate);
const Facture = mongoose.model("Facture", factureShema);
export default Facture;
