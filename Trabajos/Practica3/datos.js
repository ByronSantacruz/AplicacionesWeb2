const mongoose = require('mongoose');
//Realizamos la conexion de MongoDB
const cadenaConexion = "mongodb+srv://ByronSantacruz:Bass131558@cluster0.0ng6hbv.mongodb.net/PrestamoComputadora";
(async ()=>{
    try{    
        const conexion = await mongoose.connect(cadenaConexion); 
    }catch(error){
        //Muestra error de coneccion 
        console.log(error);
    }
})()
//Ponemos la entidades con sus atributos correspodientes
const Computadora = mongoose.model("Computadora",{
    Descripcion:String,
    DetallesTecnicos:String,
    CostoxHora:String,
});
const Prestamista = mongoose.model("Prestamista",{Nombre:String,identificacion:String,});

const Prestamo = mongoose.model("Prestamo", 
         { 
                 idComputadora: {type: mongoose.Types.ObjectId , ref:"Computadora" } ,
                 idPrestamista: {type: mongoose.Types.ObjectId , ref:"Prestamista" } ,
                 Fecha : String, 
                 Hora : String,
                 NumeroHoraPres : String, 
             }  
             );
module.exports = {
    Computadora,
    Prestamista,
    Prestamo,
};