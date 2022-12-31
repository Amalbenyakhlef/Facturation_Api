"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let factureShema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    numero: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    secteur: { type: String, required: true },
    paied: { type: Boolean, required: true, default: true },
    available: { type: Boolean, required: true, default: true },
});
factureShema.plugin(mongoose_paginate_1.default);
const Facture = mongoose_1.default.model("Facture", factureShema);
exports.default = Facture;
