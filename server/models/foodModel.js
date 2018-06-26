const mongoose = require('mongoose');
var FoodSchema = new mongoose.Schema({
    dish: {
        type: String, 
        required: [true, "Dish name is required."], 
        minlength: [3, "Dish name must be at least 3 characters."]
    },
    pic: {
        type: String, 
        required: [true, "Picture is required."], 
    },
    price: {
        type: Number, 
        required: [true, "Price is required."], 
        min: [1, "Price must be at least $1"]
    },
    quan: {
        type: Number, 
        required: [true, "Quantity is required."], 
        minlength: [1, "Quantity must be at least 1."]
    },
    desc: {
        type: String, 
        required: [true, "Description is required."], 
        minlength: [3, "Description must be at least 3 characters."]
    },
    exp: {
        type: Date, 
        required: [true, "Expiration date is required."]
    },
}, {timestamps: true})

mongoose.model('User', UserSchema)