require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// crear el servidor expresss
//Sr2pzylqoJsFoV2g
const app = express();

//Configurar cors
app.use(cors());

// lectura y parseo del body

app.use(express.json());

// DB conexion
dbConnection();
// 4ZbyEVE0moDmrElD
// mean_user



//Rutas

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/todo', require('./routes/busquedas'));
app.use('/api/hospitales', require('./routes/hospitales'));
app.use('/api/medicos', require('./routes/medicos'));
app.use('/api/login', require('./routes/auth'));
app.use('/api/upload', require('./routes/uploads'))




app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en  puerto ' + process.env.PORT);
});