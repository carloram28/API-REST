
const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    username: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    
});



UserSchema.methods.toJSON = function() {
    const { __v, ...user  } = this.toObject();
    
    return user;
}

module.exports = model( 'User', UserSchema );
