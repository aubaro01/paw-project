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

//Tira e so deixar os gets

exports.createDoctor = async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    const savedDoctor = await newDoctor.save();
    res.status(201).json(savedDoctor);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao adicionar psicologo', error });
  }
};

exports.updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedDoctor) return res.status(404).json({ message: 'Nenhum psicologo foi encontrado' });
    res.status(200).json(updatedDoctor);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar dados de psicologo', error });
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!deletedDoctor) return res.status(404).json({ message: 'Nenhum psicologo foi  encontrado' });
    res.status(200).json({ message: 'Psicologo removido!!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar psicologo', error });
  }
};
