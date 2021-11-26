const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    batch:{
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('students', studentSchema);