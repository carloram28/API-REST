
const { Router } = require('express');
const { check } = require('express-validator');

const {
    validarCampos,
} = require('../middlewares');


const { emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

const { userGet,
        usersGet,
        usersPut,
        usersPost,
        usersDelete} = require('../controllers/users');

const router = Router();

router.get('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    validarCampos
],userGet);

router.get('/', usersGet );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    validarCampos
],usersPut );

router.post('/',[
    check('username', 'El username es obligatorio').not().isEmpty(),
    check('email', 'El email no es válido').isEmail(),
    check('email').custom( emailExiste ),
    validarCampos
], usersPost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    validarCampos
],usersDelete );







module.exports = router;