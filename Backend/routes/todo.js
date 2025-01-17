const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();

router.post('/add-todo', async (req, res) => {
    const { email, txtTodo } = req.body;

    try {

        todo = new Todo({
            email,
            txtTodo
        });

        await todo.save();

        res.json({ "msg": "todo added successfully" });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Route to fetch all to-dos for a specific user
router.get('/fetch-todos', async (req, res) => {
    try {
        // console.log(req);
        const email = req.query.email;

        const todos = await Todo.find({ email });

        res.json({ todos });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Route to delete a specific to-do
router.delete('/delete-todo/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Todo.findByIdAndDelete(id);
        // const todos = await Todo.find();
        // res.json({ todos });
        res.json({
            "status": "success",
            "msg": "to-do deleted successfully."
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Update an existing to-do
router.put('/update-todo/:id', async (req, res) => {
    try {
        const { txtTodo } = req.body;
        const { id } = req.params;
        const updatedTodo = await Todo.findByIdAndUpdate(id, { txtTodo }, { new: true });
        const todos = await Todo.find({ email: updatedTodo.email });
        res.status(200).json({ todos });
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).json({ message: 'Failed to update to-do.' });
    }
});

module.exports = router;