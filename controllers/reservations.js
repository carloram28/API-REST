const { response } = require('express');
const Reservation= require('../models/reservation');


const reservationsGet  = async(req, res = response ) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = req.params;

    const [ total, reservations ] = await Promise.all([
        Reservation.countDocuments(query),
        Reservation.find(query)
            .populate('user', 'username')
            .populate('book', ['title','author'])
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        reservations
    });
}

const  reservationGet= async(req, res = response ) => {

    const { id } = req.params;
    const reservation= await Reservation.findById( id )
                            .populate('user', 'username')
                            .populate('book', ['title','author']);

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

const reservationDelete = async(req, res = response ) => {

    const { id } = req.params;
    const reservationdelete = await Reservation.findByIdAndDelete( id );

    res.json( reservationdelete );
}




module.exports = {
    reservationPost,
    reservationsGet,
    reservationGet,
    reservationPut,
    reservationDelete
}