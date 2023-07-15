const { response } = require('express');
const { Prestamista } = require('../models');


const getPrestamistas = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, prestamistas ] = await Promise.all([
        Prestamista.countDocuments(query),
        Prestamista.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      prestamistas
    })
}

const getPrestamista = async (req, res= response)=>{
    const {id} = req.params
    const prestamista=  await Prestamista.findById(id);
    res.json(prestamista);
}
const createPrestamista = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existPrestamista =  await Prestamista.findOne({name: body.name})

    if (existPrestamista)
    {
        return res.status(400).json({
            msg:`La prestamista${ existPrestamista.name } ya existe`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const prestamista= new Prestamista(data);

    const newPrestamista =  await prestamista.save();
    res.status(201).json(newPrestamista);
}
const updatePrestamista = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const prestamistaUpdated =  await Prestamista.findByIdAndUpdate(id,data, {new: true} )
    res.json(prestamistaUpdated);
}
const deletePrestamista = async (req, res = response) => {
    const { id } = req.params;
    const deletedPrestamista = await Prestamista.findByIdAndRemove(id);
    
    if (!deletedPrestamista) {
      return res.status(404).json({
        msg: 'Prestamista no encontrado'
      });
    }
    
    res.json(deletedPrestamista);
  };

 module.exports ={
    createPrestamista,
    getPrestamistas,
    getPrestamista,
    updatePrestamista,
    deletePrestamista
 }