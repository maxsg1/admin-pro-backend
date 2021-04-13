/*
ruta: api/todo/:busqueda
*/
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');
const { Router } = require('express');
const { getTodo, getDocumentosColeccion } = require('../controllers/busquedas')

const router = Router();

router.get('/:busqueda', getTodo, validarJWT);
router.get('/coleccion/:tabla/:busqueda', getDocumentosColeccion, validarJWT);




module.exports = router;