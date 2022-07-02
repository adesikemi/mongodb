const mongoose = require('mongoose');

// create a schema
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    timestamp: {
        type: "String",
        required: true,
    }
})

module.exports = mongoose.model('toDo', todoSchema)