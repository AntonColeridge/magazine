const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/magazine');

const userSchema = new mongoose.Schema({

    username: String,
    password: String

})

const User = mongoose.model('User', userSchema)
//add new user to db

// read users from db