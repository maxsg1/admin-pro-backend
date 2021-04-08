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
// 7xSnbRcJ9NacNnOE
// mean_user



//Rutas

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));




app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en  puerto ' + process.env.PORT);
});