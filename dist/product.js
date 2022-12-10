"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let productShema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
    selected: { type: Boolean, required: true, default: true },
    available: { type: Boolean, required: true, default: true }
});
productShema.plugin(mongoose_paginate_1.default);
const Product = mongoose_1.default.model("Product", productShema);
exports.default = Product;
