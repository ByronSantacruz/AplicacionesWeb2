const {
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
} = require ('./funciones')

//funciones CRUD de las entidades
GuardarComputadora("Acer","Procesador:intel i5, Almacenamiento: 500gb","13");
Guardarprestamista("Byron Santacruz","1315586477");
GuardarPrestamo("1", "1","01-07-2022", "8:40", "11"); 
//los dos primeros campos deben ser datos existentes
//funciones para editar las entidades. El primer campo debe ser existente en la BD.
editarComputadora("id de la computadora a editar","Hp","Procesador:intel celeron, Almacenamiento: 250gb","5");
editarPrestamista("id de la prestamista a editar","Flerida Saltos","1317786468");
editarunprestamo("id de la prestamo a editar","id del computadora","id de prestamista","02-07-2022", "7:40", "9");
//funciones para eliminar las entidades. Se tiene que pasar el id del registro, debe ser existente.
eliminarComputadora("id del computador");
eliminarprestamista("id de la prestamista");
eliminarunPrestamo("id del prestamo");
//funciones para listar por consola los datos registrados en las 3 colecciones
listarComputadoraForEach();
listarPrestamistaWhile();
listarPrestamoForOf();