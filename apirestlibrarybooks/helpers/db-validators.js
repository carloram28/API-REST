const { User, Book, Reservation } = require('../models');



const emailExiste = async( email = '' ) => {

    // Verificar si el correo existe
    const existeEmail = await User.findOne({ email });
    if ( existeEmail ) {
        throw new Error(`El email: ${ email }, ya está registrado`);
    }
}

const existeUsuarioPorId = async( id ) => {

    // Verificar si el usuario por id existe
    const existeUsuario = await User.findById(id);
    if ( !existeUsuario ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

/**
 * Books
 */
const existeBookPorId = async( id ) => {

    // Verificar si el libro existe
    const existeBook = await Book.findById(id);
    if ( !existeBook) {
        throw new Error(`El id no existe ${ id }`);
    }
}

/**
 * Productos
 */
const existeReservationPorId = async( id ) => {

    // Verificar si el correo existe
    const existeReservation = await Reservation.findById(id);
    if ( !existeReservation ) {
        throw new Error(`El id no existe ${ id }`);
    }
}


module.exports = {
    emailExiste,
    existeUsuarioPorId,
    existeBookPorId,
    existeReservationPorId
}

