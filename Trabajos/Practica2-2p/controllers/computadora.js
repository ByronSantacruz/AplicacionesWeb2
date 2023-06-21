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
    
    const existComputadora =  await Computadora.findOne({name: body.name})

    if (existComputadora)
    {
        return res.status(400).json({
            msg:`La computadora${ existComputadora.name } ya existe`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const computadora= new Computadora(data);

    const newComputadora =  await computadora.save();
    res.status(201).json(newComputadora);
}
const updateComputadora = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const computadoraUpdate =  await Computadora.findByIdAndUpdate(id,data, {new: true} )
    res.json(computadoraUpdate);
}
const deleteComputadora =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedComputadora =  await Computadora.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedComputadora);
}

 module.exports ={
    createComputadora,
    getComputadoras,
    getComputadora,
    updateComputadora,
    deleteComputadora
 }