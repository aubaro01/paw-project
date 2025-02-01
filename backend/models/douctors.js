// Exemplo, não por ainda na main branch

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  especializacao: {
    type: String,
    required: true
  },
  telemovel: {
    type: String,
    required: true
  },
   
  classificacao: {
    type: Number,
    default: 0
  }

});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;