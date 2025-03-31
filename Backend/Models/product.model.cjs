const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['men', 'women', 'kid'],
        required: true
    },
    mainImage: {
        type: {
            url: String,
        },
        required: true,
    },
    owner: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId,
    },
    stock: {
        default: 0,
        type: Number,
    },
    price: {
        default: 0,
        type: Number,
    },
    subImages: {
        type: [
            { url: String, },
        ],
        default: [],
    },
},
    { timestamps: true },
);

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;