const { response } = require('express')
const { Prestamo } = require('../models')


const getPrestamos= async (req, res = response )=>{

    //GET http://localhost:3000/Prestamos   ?limit=100?since=1
    const { limit = 10 , since=0 } =  req.query;
    const query = { status:true };

    const [ sum, prestamos ] = await Promise.all([
        Prestamo.countDocuments(query),
        Prestamo.find(query)
        .populate('idcomputadora','nombre status de las computadora')
        .populate('idprestamista','Nombre del pretamista')
        .skip(Number(since))
        .limit(Number(limit))
    ])
  
    res.json({
      sum, 
      prestamos
    })
    
}
const getPrestamo= async (req, res =  response)=>{
    const {id} = req.params
    const prestamo=  await Prestamo.findById(id).populate('idcomputadora idprestamista');
    res.json(prestamo);
}
const createPrestamo= async (req, res = response)=>{
    const { status, user, ...body } =  req.body;
    
    const data = {
        ...body,
        idcomputadora: body.idcomputadora,
        idprestamista: body.idprestamista,
        Fecha: body.fecha,
        hora: body.hora,
        numerohorapres: body.numerohorapres
    }

    const prestamo = new Prestamo(data);

    const newPrestamo =  await prestamo.save();
    res.status(201).json(newPrestamo);
}
const updatePrestamo= async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    // console.log(id,data)
    const updatedPrestamo =  await Prestamo.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedPrestamo);
}
const deletePrestamo= async (req, res = response)=>{
    const {id} = req.params;
    const deletedPrestamo =  await Prestamo.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedPrestamo);
}

module.exports = {
    getPrestamo,
    getPrestamos,
    createPrestamo,
    updatePrestamo,
    deletePrestamo
};