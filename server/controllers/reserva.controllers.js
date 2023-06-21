const Reserva = require("../models/Reserva");
const ctrlReservas = {};

// Obtener todas las reservas
ctrlReservas.getReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll();
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las reservas" });
  }
};

// Obtener una reserva
ctrlReservas.getReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) {
      return res.status(404).json({ message: "Reserva no encontrada" });
    }
    res.json(reserva);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la reserva" });
  }
};

// Actualizar una reserva
ctrlReservas.updateReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) {
      return res.status(404).json({ message: "Reserva no encontrada" });
    }
    const { nombre, codigo, fecha } = req.body;
    await reserva.update({ nombre, codigo, fecha });
    res.json(reserva);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la reserva" });
  }
};

// Eliminar una reserva
ctrlReservas.deleteReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) {
      return res.status(404).json({ message: "Reserva no encontrada" });
    }
    await reserva.update({ deleted: true });
    res.json({ message: "La reserva se ha eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la reserva" });
  }
};

// Crear una reserva
ctrlReservas.createReserva = async (req, res) => {
  try {
    const { nombre, codigo, fecha } = req.body;
    const reserva = await Reserva.create({ nombre, codigo, fecha });
    res.status(201).json(reserva);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la reserva" });
  }
};

module.exports = ctrlReservas;
