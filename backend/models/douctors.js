const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
 
  especializacao: {
    type: String,
    required: true
  },
  numero: {
    type: String,
    required: true
 },
    email: {
        type: String,
        required: true
    },
   
  avaliacao: {
    type: Number,
    default: 0
  },

  morada: {
    type: String,
    required: true
  },

  cidade: {
    type: String,
    required: true
  }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;