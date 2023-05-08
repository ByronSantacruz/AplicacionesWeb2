const express = require('express')
const cors  =require('cors')
//La entrada del pueto es 3500
const PORT = 3500;
const app =  express();
app.use(cors()).use(express.json())
app.use('/public',  express.static(__dirname+'/public'))
//Entidad de prestamista
let prestamistas =[]

// GET  -> Consulta de información
app.get('/', (req, res)=>{
    res.status(200).send(prestamistas);
})
// GET INDIVIDUAL -> Consulta pero de un solo elemento
app.get('/:identificacion', (req,res)=>{
    const {identificacion} =  req.params
    const prestamistasFilter =  prestamistas.filter(p=> p.identificacion.toString() === identificacion.toString())
    if (prestamistasFilter.length>0)
    {
        return res.status(200).send(prestamistasFilter[0])
    }
    res.status(403).send({
        message:'No se encontro pretamista con cedula: '+identificacion+''
    })
    

})
// POST -> Insertar información
app.post('/',(req, res)=>{
    const {body} =  req
    prestamistas.push(body);
    res.status(201).send({
        message:'El dato fue insertado correctamente:',
        response: body
    })
})
// PATCH OR PUT   -> Actualizar información
app.put('/',(req,res)=>{
    const { id, identificacion, nombre }  =  req.body;
    let student = prestamistas.filter(p=> p.identificacion=== identificacion)[0] || {}  
    student.nombre = nombre;

    res.status(202).send({
        message:'Los datos fueron modificados correctamente:',
        response:student
    })


})
// DELETE -> Eliminar algún elemento de la lista

app.delete('/:identificacion',(req, res)=>{
    const { identificacion }  =  req.params
    prestamistas =  prestamistas.filter(p=> p.identificacion.toString() !== identificacion.toString())
    res.status(200).send({
        message:'Se eliminó el prestamista con cedula: '+identificacion+''
    })

})


app.listen(PORT, ()=>{
    console.log(`Server running in http://localhost${PORT}`);
})