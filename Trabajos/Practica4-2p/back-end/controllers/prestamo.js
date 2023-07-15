const { response } = require('express');
const { Prestamo } = require('../models');

const getPrestamos = async (req, res = response) => {
  const { limit = 10, since = 0 } = req.query;
  const query = { status: true };

  const [sum, prestamos] = await Promise.all([
    Prestamo.countDocuments(query),
    Prestamo.find(query)
      .populate('computadora', 'name')
      .populate('prestamista', 'name')
      .skip(Number(since))
      .limit(Number(limit))
  ]);

  res.json({
    sum,
    prestamos
  });
};

const getPrestamo = async (req, res = response) => {
  const { id } = req.params;
  const prestamo = await Prestamo.findById(id)
    .populate('computadora', 'name')
    .populate('prestamista', 'name');
  res.json(prestamo);
};

const createPrestamo = async (req, res = response) => {
  const { status, ...body } = req.body;

  const prestamo = new Prestamo(body);

  const newPrestamo = await prestamo.save();
  res.status(201).json(newPrestamo);
};

const updatePrestamo = async (req, res = response) => {
  const { id } = req.params;
  const { status, ...data } = req.body;
  const prestamoUpdated = await Prestamo.findByIdAndUpdate(id, data, { new: true });
  res.json(prestamoUpdated);
};

const deletePrestamo = async (req, res = response) => {
  const { id } = req.params;
  const deletedPrestamo = await Prestamo.findByIdAndRemove(id);
  
  if (!deletedPrestamo) {
    return res.status(404).json({
      msg: 'Prestamo no encontrado'
    });
  }
  res.json(deletedPrestamo);
};


module.exports = {
  createPrestamo,
  getPrestamos,
  getPrestamo,
  updatePrestamo,
  deletePrestamo
};
