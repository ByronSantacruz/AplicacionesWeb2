const express =  require('express');
const cors = require('cors');

const { dbConnection } =  require('./database/config');


class Server 
{
    constructor()
    {
        this.app = express.Router();
        this.router = express.Router();

        this.port = process.env.PORT;

        //Creación de los paths
        this.paths = {
            computadoras: '/api/computadoras',
            prestamistas: '/api/prestamistas',
            prestamos: '/api/prestamos',
        }

        this.connectDB();
        this.middlewares();
        this.routes();
        this.router.use('/v1/inventory', this.app);
        this._express = express().use(this.router);
    }
    async connectDB(){
        await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.static('public'));
        this.app.use( '/uploads/', express.static('uploads'))

    }
    //Implementación de rutas de entidades
    routes(){
        this.app.use(this.paths.computadora, require('./routes/computadora')   )
        this.app.use(this.paths.prestamista, require('./routes/prestamista')   )
        this.app.use(this.paths.prestamo, require('./routes/prestamo')   )
    }

    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor ejecuntando en puerto ${this.port}`)
        })
    }


}

module.exports = Server;
