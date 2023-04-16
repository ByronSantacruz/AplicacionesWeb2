//Llamamos los datos de datos.js
const {Computadoras,Prestamos } = require('./datos.js');
//Realizamos el proceso de asyncnawait
//Creamos la funcion con la estructura de asycnawait para buscar el prestamo
async function BucarPrestamoPorId(ID)
{
    const Prestamo =  Prestamos.find(Prestamo=> Prestamo.id===ID);
    if (!Prestamo)
    {
        const error = new Error()
        error.message=`Prestamo con id ${ID} no fue encontrado`
        throw error;
    }
    return (Prestamo)
}
//Creamos la funcion con la estructura de asycnawait para buscar computadoras
async function BuscarComputadorasPorId(ID1)
{
    const Computadora =  Computadoras.find(Computadora => Computadora.id=== ID1)
    if (!Computadora)
    {
        const error= new Error()
        error.message= `La Computadora con id ${ID1} no fue encontrado`
        throw error;
    }
    return (Computadora);
}

//Con la funcion por medio de la sincronia de el parametro await
(async ()=>{
    try{
        const Prestamo = await BucarPrestamoPorId(2);
        const Computadora = await BuscarComputadorasPorId(Prestamo.ID_Computadora);
        Prestamo.Computadora = Computadora;
        delete Prestamo.ID_Computadora;
        console.log(Prestamo);
    
    } catch(error){
        console.log(error.message);
    }
})()
