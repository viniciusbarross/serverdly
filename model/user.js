const mongoose = require('mongoose');

const UserSchemma = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User',UserSchemma);

module.exports = User;

