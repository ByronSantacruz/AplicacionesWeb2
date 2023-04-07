//Préstamo de computadoras
//Definimos los respectivos Objetos:Computadora, Prestamista, Prestamo.
//Especificamos dentro de cada const los atributos del objeto.
const Computadora =[
    { ID_Computadora:1, Descripcion:"Acer", Detalles_tecnicos:"Procesador:intel i5, Almacenamiento: 500gb", Costo_por_hora_prestamo:13},
    { ID_Computadora:2, Descripcion:"Dell", Detalles_tecnicos:"Procesador:intel dual core, Almacenamiento: 1Tb", Costo_por_hora_préstamo:10},
    { ID_Computadora:3, Descripcion:"Lenovo.", Detalles_tecnicos:"Procesador:intel i3, Almacenamiento: 500gb", Costo_por_hora_préstamo:8},
    { ID_Computadora:4, Descripcion:"Hp", Detalles_tecnicos:"Procesador:intel celeron, Almacenamiento: 250gb", Costo_por_hora_préstamo:5},
    { ID_Computadora:5, Descripcion:"Asus", Detalles_tecnicos:"Procesador:intel i7, Almacenamiento: 1Tb", Costo_por_hora_préstamo:18},
];
const Prestamista =[
    {  ID_Prestamista:1, Nombre:"Byron Santacruz", Identificacion:"1315586477"},
    {  ID_Prestamista:2, Nombre:"Nohelia Santacruz", Identificacion:"1317786457"},
    {  ID_Prestamista:3, Nombre:"Flerida Saltos", Identificacion:"1317786468"},
    {  ID_Prestamista:4, Nombre:"Narcisa Santacruz", Identificacion:"1232525279"},
    {  ID_Prestamista:5, Nombre:"Humberto Saltos", Identificacion:"1245938542"}
];
const Prestamo =[
//Relacionamos los objeto con los id
    {  ID_Prestamo:1, ID_Computadora:1, ID_Prestamista:1, Fecha:"01-07-2022", Hora:"8:40", Numero_hora_prestamo:11},
    {  ID_Prestamo:2, ID_Computadora:2, ID_Prestamista:2, Fecha:"08-04-2022", Hora:"7:30", Numero_hora_prestamo:24},
    {  ID_Prestamo:3, ID_Computadora:3, ID_Prestamista:3, Fecha:"10-05-2022", Hora:"13:14", Numero_hora_prestamo:5},
    {  ID_Prestamo:4, ID_Computadora:4, ID_Prestamista:4, Fecha:"01-16-2023", Hora:"11:20", Numero_hora_prestamo:8},
    {  ID_Prestamo:5, ID_Computadora:5, ID_Prestamista:5, Fecha:"03-01-2023", Hora:"12:39", Numero_hora_prestamo:48}
];
//Utilizamos de length para la distancia de los const de ambos caso tanto para Computadora y Prestamo
let conteo=0;
console.log('\nDetalle de computadora:');
while (conteo<Computadora.length){
    console.log("ID: "+Computadora[conteo].ID_Computadora+"; Detalle: "+Computadora[conteo].Descripcion+"; Detalle tecnico: "+Computadora[conteo].Detalles_tecnicos);
    conteo++;
}

console.log('\nPrestamo:');
for (let i=0; i<Prestamo.length;i++){
    console.log('Id Prestamo: '+Prestamo[i].ID_Prestamo+ '  Id del Computadora:  '+Prestamo[i].ID_Computadora +'  Id del Plestamista:  '+Prestamo[i].ID_Prestamista +
    '; Fecha prestada: '+Prestamo[i].Fecha +'; Hora: '+Prestamo[i].Hora+'; Número de horas del préstamo: '+Prestamo[i].Numero_hora_prestamo);
}
//Usando forEach apartir de el elemento "Atributo Actual" hacemos el llamado de cada uno de las propiedades."
console.log('\nPrestamista:');
Prestamista.forEach(Atributo_Actual => console.log('Id: ' +Atributo_Actual.ID_Prestamista +'   Nombre del Prestamista: '+Atributo_Actual.Nombre+
                 '    Numero de cedula: '+Atributo_Actual.Identificacion));
