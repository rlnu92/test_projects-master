const mongoose = require('mongoose');

// Creating User Model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, 
    age: { type: Number, required: true }
});

const User = mongoose.model('User', userSchema);



//Controller function
const createUser = async (name,email,password, age) => {
    try {

    } catch(error) {

    }
};



