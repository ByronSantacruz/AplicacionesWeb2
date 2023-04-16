//Préstamo de computadoras
//Definimos los respectivos Objetos:Computadora, Prestamista, Prestamo.
//Especificamos dentro de los arreglos con los objetos almacenados
const Computadoras =[
    { id:1, Descripcion:"Acer", Detalles_tecnicos:"Procesador:intel i5, Almacenamiento: 500gb", Costo_por_hora_prestamo:13},
    { id:2, Descripcion:"Dell", Detalles_tecnicos:"Procesador:intel dual core, Almacenamiento: 1Tb", Costo_por_hora_préstamo:10},
    { id:3, Descripcion:"Lenovo.", Detalles_tecnicos:"Procesador:intel i3, Almacenamiento: 500gb", Costo_por_hora_préstamo:8},
    { id:4, Descripcion:"Hp", Detalles_tecnicos:"Procesador:intel celeron, Almacenamiento: 250gb", Costo_por_hora_préstamo:5},
    { id:5, Descripcion:"Asus", Detalles_tecnicos:"Procesador:intel i7, Almacenamiento: 1Tb", Costo_por_hora_préstamo:18},
];
const Prestamos =[
//Relacionamos los objeto con los id
    {  id:1, ID_Computadora:1, Fecha:"01-07-2022", Hora:"8:40", Numero_hora_prestamo:11},
    {  id:2, ID_Computadora:2, Fecha:"08-04-2022", Hora:"7:30", Numero_hora_prestamo:24},
    {  id:3, ID_Computadora:3, Fecha:"10-05-2022", Hora:"13:14", Numero_hora_prestamo:5},
    {  id:4, ID_Computadora:4, Fecha:"01-16-2023", Hora:"11:20", Numero_hora_prestamo:8},
    {  id:5, ID_Computadora:5, Fecha:"03-01-2023", Hora:"12:39", Numero_hora_prestamo:48}
];

//Exportamos los arreglos de objetos
module.exports = {
    Computadoras,
    Prestamos,
};