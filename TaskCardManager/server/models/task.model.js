const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true, 
            "Task Name Required."
        ],
        minLength: [
            2,
            "Task must have at least 2 characters."
        ]
    },
    isComplete: {
        type: Boolean,
        default: false
    },
    subtasks: {
        type: [this],
        default: []
    }
}, { timestamps: true }); 

module.exports = mongoose.model('Task', TaskSchema); // .model() STAYS .model()

// attributeString: {
//     type: String,
// },



// attributeNum: {
//     type: Number,
// },