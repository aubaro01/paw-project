const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  data: {
    type: Date,
    required: true
  },
  horas: {
    type: String,
    required: true
  },
  id_doutor: {
    type: Schema.Types.ObjectId,
    ref: 'doctors',
    required: true
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;