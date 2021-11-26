const mongoose = require('mongoose')

const deptSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    course_num: {
        type: Number,
        required: true
    },
    faculty: {
        type: String,
        required: false,
        default: "IT"
    }
})

module.exports = mongoose.model('Departments', deptSchema);
