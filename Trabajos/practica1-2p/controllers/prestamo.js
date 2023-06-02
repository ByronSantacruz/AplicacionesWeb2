const { response } = require('express');
const Prestamo = require('../models/prestamo');

// Controlador para crear una nueva prestamo
const crearPrestamo = async (req, res = response) => {
  try {
    const nuevoPrestamo = new Prestamo(req.body);
    const prestamoGuardada = await nuevoPrestamo.save();
    res.status(201).json(prestamoGuardada);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear la prestamo', error });
  }
};

// Controlador para obtener todas las prestamos
const obtenerPrestamos = async (req, res = response) => {
  try {
    const prestamos = await Prestamo.find();
    res.json(prestamos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las prestamos', error });
  }
};

// Controlador para obtener una prestamo por su ID
const obtenerPrestamosPorId = async (req, res = response) => {
  try {
    const { id } = req.params;
    const prestamo = await Prestamo.findById(id);
    if (!prestamo) {
      return res.status(404).json({ mensaje: 'Prestamo no encontrada' });
    }
    res.json(prestamo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la prestamo', error });
  }
};

// Controlador para actualizar una prestamo por su ID
const actualizarPrestamo = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { idcomputadora, idprestamista, fecha, hora, numerohorapres } = req.body;
    const prestamoActualizado = await Prestamo.findByIdAndUpdate(
      id,
      { idcomputadora, idprestamista, fecha, hora, numerohorapres },
      { new: true }
    );
    if (!prestamoActualizado) {
      return res.status(404).json({ mensaje: 'Prestamo no encontrada' });
    }
    res.json(prestamoActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar la prestamo', error });
  }
};

// Controlador para eliminar una prestamo por su ID
const eliminarPrestamo = async (req, res = response) => {
  try {
    const { id } = req.params;
    const prestamoEliminada = await Prestamo.findByIdAndDelete(id);
    if (!prestamoEliminada) {
      return res.status(404).json({ mensaje: 'Prestamo no encontrada' });
    }
    res.json({ mensaje: 'Prestamo eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la prestamo', error });
  }
};

module.exports = {
  crearPrestamo,
  obtenerPrestamos,
  obtenerPrestamosPorId,
  actualizarPrestamo,
  eliminarPrestamo,
};
