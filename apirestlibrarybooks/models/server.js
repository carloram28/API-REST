const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        this.paths = {
            categorias: '/api/books',
            productos:  '/api/reservations',
            usuarios:   '/api/users',
        }


        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        this.app.use(express.urlencoded({ extended: true }));

    }

    routes() {
        
        
        this.app.use( this.paths.categorias, require('../routes/books'));
        this.app.use( this.paths.productos, require('../routes/reservations'));
        this.app.use( this.paths.usuarios, require('../routes/users'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
