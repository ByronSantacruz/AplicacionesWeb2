//Importamos los metodos del CRUD 
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

//Aqui usted proda guarda informacion 
//Segun los atributos Computadora(Descripcion,DetallesTecnicos,CostoxHora)
GuardarComputadora("Acer","Procesador:intel i5, Almacenamiento: 500gb","13");
GuardarComputadora("Lenovo.","Procesador:intel i3, Almacenamiento: 500gb","8");
GuardarComputadora("Asus","Procesador:intel i7, Almacenamiento: 1Tb","18");
//Segun los atributos Prestamista(Nombre,identificacion)
Guardarprestamista("Byron Santacruz","1315586477");
Guardarprestamista("Humberto Saltos","1245938542");
Guardarprestamista("Narcisa Santacruz","1232525279");
//Segun los atributos Prestamo(idComputadora,idPrestamista,Fecha,Hora,NumeroHoraPres)
GuardarPrestamo("644c8ebb1f76a757657a4f7e", "644c8ebb1f76a757657a4f7f","01-07-2022", "8:40", "11"); 
GuardarPrestamo("idComputadora", "id de prestamista","01-16-2023","11:20","8"); 
GuardarPrestamo("idComputadora", "id de prestamista","03-01-2023","12:39","48"); 
//Aqui usted proda editar las entidades.
//En el primero debera poner la id del atributo a modificar
editarComputadora("id de la computadora","Hp","Procesador:intel celeron, Almacenamiento: 250gb","5");
editarPrestamista("id de la prestamista","Flerida Saltos","1317786468");
editarunprestamo("id de la prestamo","id del computadora","id de prestamista","02-07-2022", "7:40", "9");
//Aqui usted proda eliminar el atributo con tan solo poner su id.
eliminarComputadora("id del computador");
eliminarprestamista("id de la prestamista");
eliminarunPrestamo("id del prestamo");
//Este metodo alista los datos que se encuentra en cada entidad.
listarComputadoraForEach();
listarPrestamistaWhile();
listarPrestamoForOf();