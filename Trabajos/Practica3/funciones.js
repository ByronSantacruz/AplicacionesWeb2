const {Computadora, Prestamista, Prestamo} = require ('/datos')

async function GuardarComputadora(Descripcion,DetallesTecnicos, CostoxHora) {
    try {
        const nuevoComputadora = new Computadora({
          Descripcion:Descripcion,
          DetallesTecnicos:DetallesTecnicos,
          CostoxHora:CostoxHora
        });
        const GuardaComputadora = await nuevoComputadora.save();
        console.log("Computadora guardado con éxito.");
    } catch (error) {
      console.error(error);
    }
}
//funcion para editar Computadora
async function editarComputadora(Descripcion,DetallesTecnicos, CostoxHora) {
    try {
      await Computadora.findByIdAndUpdate( {
        Descripcion:Descripcion,
        DetallesTecnicos:DetallesTecnicos,
        CostoxHora:CostoxHora
      });
      console.log("Computadora editado con éxito.");
    } catch (error) {
      console.error(error);
    }
}
//funcion para eliminar Computadora
async function eliminarComputadora(id) {
    try {
      await Computadora.findByIdAndDelete(id);
      console.log("Computadora eliminado con éxito.");
    } catch (error) {
      console.error(error);
    }
}
async function Guardarprestamista(Nombre,identificacion) {
    try {
        const nuevaPrestamista = new Prestamista({
          Nombre:Nombre,
          identificacion:identificacion
        });
        const GuardaPrestamista = await nuevaPrestamista.save();
        console.log("Prestamista guardado con éxito.");
    } catch (error) {
      console.error(error);
    }
}
//funcion para editar una prestamista 
async function editarPrestamista(Nombre,identificacion) {
    try {
      await Prestamista.findByIdAndUpdate( {
        Nombre:Nombre,
        identificacion:identificacion
      });
      console.log("Prestamista editada con éxito.");
    } catch (error) {
      console.error(error);
    }
}
//funcion para eliminar un Tipo de Ejercicio
async function eliminarprestamista(id) {
    try {
      await Prestamista.findByIdAndDelete(id);
      console.log("prestamista eliminada con éxito.");
    } catch (error) {
      console.error(error);
    }
}
async function GuardarPrestamo(idComputadora, idPrestamista, Fecha, Hora, NumeroHoraPres) {
    try {
        const nuevoPrestamo = new Prestamo({
            idComputadora: idComputadora,
            idPrestamista:idPrestamista,
            Fecha :Fecha, 
            Hora : Hora,
            NumeroHoraPres : NumeroHoraPres
           
        });
        const GuardaPrestamo = await nuevoPrestamo.save();
        console.log( "Prestamo guardado con éxito.");
    } catch (error) {
      console.error(error);
    }
}
//funcion para editar un Prestamo
async function editarunprestamo(idComputadora, idPrestamista, Fecha, Hora, NumeroHoraPres) {
    try {
        const prestamo = await Prestamo.findByIdAndUpdate(idprestamo,{
            idComputadora: idComputadora,
            idPrestamista: idPrestamista,
            Fecha: Fecha,
            Hora: Hora,
            NumeroHoraPres: NumeroHoraPres,
        });
        console.log("Prestamo editado con éxito.");
    } catch (error) {
        console.error(error);
    }
}
//funcion para eliminar un Prestamo
async function eliminarunPrestamo(idprestamo) {
    try {
        const prestamo = await Prestamo.findByIdAndDelete(idprestamo);
        console.log("prestamo eliminado con éxito.");
    } catch (error) {
        console.error(error);
    }
}
async function listarPrestamoForOf() {
    try {
        const prestamo = await Prestamo.find().populate('idComputadora idPrestamista');
        console.log(`Prestamo`)
        console.log('************************');
        for (const prestamos of prestamo) {
            console.log(`ID: ${prestamos._id}`);
          console.log(`Computadora: ${prestamos.idComputadora.Descripcion}`);
          console.log(`Prestamista: ${prestamos.idPrestamista.prestamista}`);
          console.log(`Fecha: ${prestamos.Fecha}`);
          console.log(`Hora: ${prestamos.Hora}`);
          console.log(`NumeroHoraPres: ${prestamos.NumeroHoraPres}`);
          console.log('*************************');
        }
      } catch (error) {
        console.log('Error al listar prestamos', error);
      }
}
async function listarComputadoraForEach() {
    try {
        const cursor = await Computadora.find();
        console.log(` Computadora`)
        console.log('**********************************');
        cursor.forEach((valor) => {
            console.log(`Descripcion : ${valor.Descripcion}`);
            console.log(`Detalle Tecnico : ${valor.DetallesTecnicos}`);
            console.log(`Costo por hora : ${valor.CostoxHora}`);
            console.log('********************************');
        });
    } catch (error) {
      console.log('Error al listar computadora', error);
    }
}
async function listarPrestamistaWhile() {
    try {
        const palabras = await Prestamista.find();
        let i = 0;
        console.log(`Prestamista`)
        console.log('*******************************');
        while (i < palabras.length) {
            console.log(`Nombre de prestamista: ${palabras[i].Nombre}`);
            console.log(`Identificacion: ${palabras[i].identificacion}`);
            console.log('---------------------------------');
            i++;
        }
    } catch (error) {
        console.log('Error al listar prestamista ', error);
    }
}
module.exports = {
   GuardarComputadora,
   editarComputadora,
   eliminarComputadora,
   Guardarprestamista,
   editarPrestamista,
   eliminarprestamista,
   GuardarPrestamo,
   editarunprestamo,
   eliminarunPrestamo,
   listarComputadoraForEach,
   listarPrestamistaWhile,
   listarPrestamoForOf,
};