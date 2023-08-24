const { response } = require('express');
const Reservation = require('../models/reservation');
const User = require('../models/user');
const Book = require('../models/book');


const reservationsGet  = async(req, res = response ) => {

    try {
        const reservations = await Reservation.find()
        .populate('book') 
        .populate('user'); 

        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: 'Error al encontrar reservations', error: error.message });
    }
}


const  reservationGet= async(req, res = response ) => {

    const { id } = req.params;
    const reservation= await Reservation.findById( id )
                            .populate('user')
                            .populate('book');

    res.json( reservation );

}
const reservationPost = async(req, res = response ) => {

    try {
        const { book, user, ...body } = req.body;

        const reservationDB = await Reservation.findOne({ book: book, user: user });

        if (reservationDB) {
            return res.status(400).json({
                msg: `La reserva con ID ${reservationDB._id} ya existe`
            });
        }

        // Generar la data a guardar
        const data = {
            ...body,
            user: user,
            book: book
        };

        const reservation = new Reservation(data);

        // Guardar en la base de datos
        await reservation.save();

        res.status(201).json(reservation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
  
}

const reservationPut = async( req, res = response ) => {

    const { id } = req.params;
    const { dateReserved,dateDue,...resto } = req.body;

   
    const reservation = await Reservation.findByIdAndUpdate(id,
        { dateReserved, dateDue, ...resto },
        { new: true }
    );

    res.json( reservation);

}
  


const reservationDelete = async (req, res = response) => {
    try {
        const { id } = req.params;

        // Obtener la reserva antes de eliminarla
        const reservation = await Reservation.findById(id);
        
        if (!reservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }

        // Eliminar la reserva
        const deletedReservation = await Reservation.findByIdAndDelete(id);
        res.json(deletedReservation);
        } catch (error) {
        res.status(500).json({ message: 'Error deleting reservation', error: error.message });
    }
};




module.exports = {
    reservationPost,
    reservationsGet,
    reservationGet,
    reservationPut,
    reservationDelete
}