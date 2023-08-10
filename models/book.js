const { Schema, model } = require('mongoose');

const BookSchema = Schema({
    title: {
        type: String,
        required: [true, 'El title es obligatorio'],
        unique: true
    },
    author: {
        type: String,
        required: [true,'El author es obligatorio']
    },
    available: {
        type: Boolean,
        required: [true,'El available es obligatorio']
    }
});


BookSchema.methods.toJSON = function() {
    const { __v,...data  } = this.toObject();
    return data;
}


module.exports = model( 'Book', BookSchema );
