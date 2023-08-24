const { Router } = require('express');
const { check } = require('express-validator');

const {validarCampos} = require('../middlewares');

const { reservationPost,
        reservationsGet,
        reservationGet,
        reservationPut, 
        reservationDelete } = require('../controllers/reservations');

const { existeReservationPorId, existeBookPorId, existeUsuarioPorId } = require('../helpers/db-validators');

const router = Router();

/**
 * {{url}}/api/reservations
 */

//  Obtener todas las reservations - publico
router.get('/', reservationsGet );

// Obtener una reservation por id - publico
router.get('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( existeReservationPorId ),
    validarCampos,
], reservationGet);

// Crear Reservation 
router.post('/', [ 
    check('user','No es un id de Mongo').isMongoId(),
    check('user').custom(existeUsuarioPorId ),
    check('book','No es un id de Mongo').isMongoId(),
    check('book').custom(existeBookPorId ),
    validarCampos
], reservationPost );

// Actualizar 
router.put('/:id',[
    check('id').custom( existeReservationPorId ),
    validarCampos
], reservationPut );

// Borrar una reservation
router.delete('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( existeReservationPorId ),
    validarCampos,
], reservationDelete);


module.exports = router;