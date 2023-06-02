const { response } = require('express');
const { Computadora } = require('../models');


const getComputadoras = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, computadoras ] = await Promise.all([
        Computadora.countDocuments(query),
        Computadora.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      computadoras
    })
}

const getComputadora = async (req, res= response)=>{
    const {id} = req.params
    const computadora=  await Computadora.findById(id);
    res.json(computadora);
}
const createComputadora = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existComputadora =  await Computadora.findOne({descripcion: body.descripcion})

    if (existComputadora)
    {
        return res.status(400).json({
            msg:`El nombre  ${ existeComputadora.nombre } ya existe`
        })
    }

    const data = {
        ...body,
        descripcion: body.descripcion,
        detallestecnicos: body.detallestecnicos,
        costoxhora: body.costoxhora
    }

    const computadora = new Computadora(data);

    const newComputadora =  await computadora.save();
    res.status(201).json(newComputadora);
}
const updateComputadora = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const computadoraUpdated =  await Computadora.findByIdAndUpdate(id,data, {new: true} )
    res.json(computadoraUpdated);
}
const deleteComputadora=  async (req, res= response)=>{
    const {id} = req.params;
    const deletedComputadora=  await Computadora.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedComputadora);
}

 module.exports ={
    createComputadora,
    getComputadora,
    getComputadoras,
    updateComputadora,
    deleteComputadora
 }