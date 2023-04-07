const books = [
    {id:1,title:'Aplicaciones distribuidas',idauthor:1},
    {id:2,title:'Codigo limpio Js',idauthor:2},
    {id:3,title:'Patrones de diseño',idauthor:3},
]

const authors = [
    {id:1,name:'Luis Mendoza'},
    {id:2,name:'Antonio Jose'},
    {id:3,name:'Alex Andres'},
] 

for (const iterator of books)
{
    authorsAux= authors.find(ele => ele.id === iterator.idauthor)
    console.log(`nombre del autor: ${iterator.title} Autor: ${authorsAux.name}`);
}