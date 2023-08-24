const { Router } = require('express');
const { check } = require('express-validator');

const {validarCampos} = require('../middlewares');

const { booksPost,
        bookGet,
        booksPut,
        booksGet,
        booksDelete } = require('../controllers/books');
const { existeBookPorId } = require('../helpers/db-validators');

const router = Router();

/**
 * {{url}}/api/books
 */

//  Obtener todas las libros - publico
router.get('/', booksGet );

// Obtener una categoria por id - publico
router.get('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeBookPorId ),
    validarCampos,
], bookGet );

// Crear categoria - privado - cualquier persona con un token válido
router.post('/', [ 
    check('title','El title es obligatorio').not().isEmpty(),
    check('author','El author es obligatorio').not().isEmpty(),
    check('available','El available es obligatorio').not().isEmpty(),
    validarCampos
], booksPost );

// Actualizar 
router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeBookPorId ),
    validarCampos
],booksPut );

// Borrar un book 
router.delete('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( existeBookPorId ),
    validarCampos,
],booksDelete);



module.exports = router;