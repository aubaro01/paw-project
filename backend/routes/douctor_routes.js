// Rotas dos douctors 
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/douctor_controller');

router.get('/', doctorController.getDoctors);
router.get('/:id', doctorController.getDoctorById);
router.post('/', doctorController.createDoctor);
router.put('/:id', doctorController.updateDoctor);
router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;
