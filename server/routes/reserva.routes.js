const express = require("express");
const reservaControllers = require("../controllers/reserva.controllers");

const router = express.Router();

// Obtener todas las reservas
router.get("/", reservaControllers.getReservas);

// Obtener una reserva
router.get("/:id", reservaControllers.getReserva);

// Crear una reserva
router.post("/", reservaControllers.createReserva);

// Actualizar una reserva
router.put("/:id", reservaControllers.updateReserva);

// Eliminar una reserva
router.delete("/:id", reservaControllers.deleteReserva);

module.exports = router;
