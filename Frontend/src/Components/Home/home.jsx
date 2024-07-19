import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Message from '../Message/msg';
import './home.css';

const Home = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');
    const [editingId, setEditingId] = useState(null);

    const handleChange = (e) => {
        setTodo(e.target.value);
        setError('');
    };

    const fetchUserDetails = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/auth/user', { withCredentials: true });
            setEmail(response.data.email);
        } catch (error) {
            console.error('Failed to fetch user details:', error);
            setError('Failed to fetch user details.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMsg('');

        if (!todo.trim()) {
            setError("To-do cannot be empty.");
            return;
        }

        try {
            if (editingId) {
                // Update existing to-do
                await axios.put(
                    `http://localhost:5000/api/todo/update-todo/${editingId}`,
                    { txtTodo: todo },
                    { withCredentials: true }
                );
                setMsg('To-do updated successfully.');
            } else {
                // Add new to-do
                await axios.post(
                    'http://localhost:5000/api/todo/add-todo',
                    { email, txtTodo: todo },
                    { withCredentials: true }
                );
                setMsg('To-do added successfully.');
            }

            setTodo('');
            setEditingId(null); // Reset editing mode
            fetchTodos();
        } catch (error) {
            console.error('Error submitting todo:', error);
            setError('Something went wrong.');
        }
    };

    const fetchTodos = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/todo/fetch-todos',
                {
                    params: { email },
                    withCredentials: true
                }
            );
            setTodos(response.data.todos);
        } catch (error) {
            console.error('Error fetching todos:', error);
            setError('Failed to fetch to-dos.');
        }
    };

    const deleteTodo = async (id) => {
        setError('');
        setMsg('');
        try {
            await axios.delete(`http://localhost:5000/api/todo/delete-todo/${id}`, { withCredentials: true });
            setMsg('To-do deleted successfully.');
            fetchTodos();
        } catch (error) {
            console.error('Error deleting todo:', error);
            setError('Failed to delete to-do.');
        }
    };

    const startEditing = (todo) => {
        setTodo(todo.txtTodo);
        setEditingId(todo._id);
    };

    useEffect(() => {
        fetchUserDetails();
        fetchTodos();
    }, []);

    useEffect(() => {
        if (email) {
            fetchTodos();
        }
    }, [email]);

    return (
        <>
            <div className="home-container">
                <span className="title-add-todo">{editingId ? 'Update To-Do' : 'Add To-Do'}</span>

                <form onSubmit={handleSubmit} className="form-auth">
                    <label htmlFor="add-todo" className="label-add-todo">To-Do:</label>
                    <input
                        type="text"
                        name="add-todo"
                        id="add-todo"
                        placeholder="Add to-do"
                        className="txt-add-todo"
                        value={todo}
                        onChange={handleChange}
                    />
                    <button className="btn-add-todo">{editingId ? 'Update' : 'Save'}</button>
                </form>
            </div>
            <div className="home-container">
                <span className="title-add-todo">Your To-Dos</span>
                <table className="todos-table">
                    <thead>
                        <tr>
                            <th className="td-th-center">#</th>
                            <th>Todos</th>
                            <th className="td-th-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.length > 0 ? todos.map((item, index) => (
                            <tr key={item._id}>
                                <td className="td-th-center">{index + 1}</td>
                                <td>{item.txtTodo}</td>
                                <td className="td-th-center">
                                    <button className="btn-todo-action" onClick={() => startEditing(item)}>Edit</button>
                                    <button className="btn-todo-action" onClick={() => deleteTodo(item._id)}>Delete</button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="3" className="td-th-center">No to-dos found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {error && <Message msgClass="red" title="Error" text={error} />}
            {msg && <Message msgClass="green" title="Success" text={msg} />}
        </>
    );
}

export default Home;
