const { response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');
const { googleVerify } = require('../helpers/google-verify');

const login = async(req, res = response) => {
    const { email, password } = req.body;
    try {
        //verificar email
        const usuarioDB = await Usuario.findOne({ email });

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'Email no válido'
            });
        }

        //verificar contraseña

        const validPassword = bcrypt.compareSync(password, usuarioDB.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña no válida'
            });
        }
        //Generar el TOKEN -jwt
        const token = await generarJWT(usuarioDB.id);
        res.json({
            ok: true,
            token
        })

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'hable con un admin'
        })
    }

}

const googleSignIn = async(req, res = response) => {
    const googleToken = req.body.token;

    try {
        const { name, email, picture } = await googleVerify(googleToken);

        const usuarioDB = await Usuario.findOne({ email });
        let usuario;
        if (!usuarioDB) {
            // si no existe usuario
            usuario = new usuario({
                nombre: name,
                email,
                password: '@@@',
                img: picture,
                google: true
            });
        } else {
            //existe usuario
            usuario = usuarioDB;
            usuario.google = true;
            //usuario.password =true;
        }

        //Guardar usuario
        await usuario.save();



        //Generar el TOKEN -jwt
        const token = await generarJWT(usuarioDB.id);
        res.json({
            ok: true,
            token
        });
    } catch (error) {
        res.status(401).json({
            ok: false,
            msg: 'Token incorrecto'

        });
    }


}
module.exports = {
    login,
    googleSignIn
};