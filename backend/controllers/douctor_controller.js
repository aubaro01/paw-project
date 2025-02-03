// Funções do CRUD para os psicologos
const Doctor = require('../models/doctors');

exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao procurar por psicologos', error });
  }
};

exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: 'Psicologo não encontrado' });
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao ao procurar por psicologo', error });
  }
};

