//Llamamos los datos de datos.js
const {Computadoras,Prestamos } = require('./datos.js');
//Realizamos el proceso de callbacks
//Funcion para buscar prestamo por id
function BucarPrestamoPorId(ID, callback){
    const Prestamo =  Prestamos.find(Prestamo=> Prestamo.id===ID);
    if (!Prestamo)
    {
        const error = new Error()
        error.message=`Prestamo con id ${ID} no fue encontrado`
        return callback(error)
    }
    return callback(null, Prestamo);
}
//Funcion para buscar Computadoras por id
function BuscarComputadorasPorId(ID1,callback)
{
    const Computadora =  Computadoras.find(Computadora => Computadora.id=== ID1)
    if (!Computadora)
    {
        const error= new Error()
        error.message= `La Computadora con id ${ID1} no fue encontrado`
        return callback(error)
    }
    return callback(null, Computadora)
}
//Realizamos un metodo para mostrar con el id la busqueda de pretamo y computadora
BucarPrestamoPorId(3, (err, Prestamo)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    BuscarComputadorasPorId(Prestamo.ID_Computadora, (err, Computadora)=>{
        if (err)
        {
             console.log(err.message);
             return;
        }
        //Unimos los dos campos
        Prestamo.Computadora = Computadora;
        //Eliminamos el campo repetido
        delete Prestamo.ID_Computadora;
        console.log(Prestamo);
    })
})
