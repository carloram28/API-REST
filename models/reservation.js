const { Schema, model } = require('mongoose');

const ReservationSchema = Schema({
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    dateReserved:{
        type: Date,
        required:[true,'La fecha de Reserva es obligatoria']

    },  

    dateDue:{
        type:Date,
        required:[true,'La fecha de vencimiento es obligatoria'],
        } 
});


ReservationSchema.methods.toJSON = function() {
    const { __v,...data  } = this.toObject();
    return data;
}


module.exports = model( 'Reservation', ReservationSchema );
