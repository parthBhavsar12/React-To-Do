const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    txtTodo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('todos', ToDoSchema);