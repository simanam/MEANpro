const mongoose = require('mongoose');
const FoodSchema = require('./foodModel');
const bcrypt = require('bcrypt');
var UserSchema = new mongoose.Schema({
    fname: {
        type: String, 
        required: [true, "First name is required."], 
        minlength: [3, "First name must be at least 3 characters."]
    },
    lname: {
        type: String, 
        required: [true, "Last name is required."], 
        minlength: [3, "Last name must be at least 3 characters."]
    },
    email: {
        type: String, 
        required: [true, "Email is required."],
        minlength: [6, "Email must be at least 6 characters."]
    },
    password: { 
        type: String, 
        required: [true, "Password must be at least 4 characters."], 
        minlength: [4, "Password must be at least 4 characters"],
    },
    specialty: {
        type: String, 
        required: [true, "Type is required."], 
        minlength: [3, "Type must be at least 3 characters."]
    },
    food: {
        FoodSchema,
    }
}, {timestamps: true})

mongoose.model('User', UserSchema)