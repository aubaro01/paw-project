// Rotas dos douctors 
const express = require('express');
const { getDoctors, getDoctorById } = require('../controllers/douctor_controller');
const router = express.Router();

router.get('/', getDoctors);
router.get('/:id', getDoctorById);

module.exports = router;
