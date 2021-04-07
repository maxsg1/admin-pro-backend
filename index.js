require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// crear el servidor expresss
//Sr2pzylqoJsFoV2g
const app = express();

//Configurar cors
app.use(cors());

// DB conexion
dbConnection();
// 7xSnbRcJ9NacNnOE
// mean_user



//Rutas
app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola mundo'
    })
});



app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en  puerto ' + process.env.PORT);
});