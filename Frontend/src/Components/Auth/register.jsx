import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Message from '../Message/msg';

const Register = () => {

    const navigate = useNavigate();

    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');
    const [passwordType, setPasswordType] = useState('password');

    const checkBox = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confPassword: ''
    });

    const { name, email, password, confPassword } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleShowPassword = () => {
        setPasswordType(checkBox.current.checked ? "text" : "password");
    }

    const handleSubmit = async (e) => {
        setError('');
        setMsg('');
        e.preventDefault();
        if (password !== confPassword) {
            // console.log('Passwords do not match');
            setError('Passwords do not match');
            return;
        }
        
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                username: name,
                email: email,
                password: password
            });

            // console.log(response.data); // Handle the response from the server
            setMsg("Registered successfully.")
            setTimeout(
                () => {navigate('/login')}
            ,1500);
        } catch (error) {
            console.error(error.response.data); // Handle errors
            setError(error.response.data.msg)
        }
    };

    return (
        <>
            <div className="form-container">
                <div className="auth-nav">
                    <Link className="btn-auth-nav" to="/login">Login</Link>
                    <Link className="btn-auth-nav auth-active-nav" to="/register">Register</Link>
                </div>
                <form onSubmit={handleSubmit} className="form-auth">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-ip"
                        placeholder="Your Name"
                        value={name}
                        onChange={handleChange}
                    />
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-ip"
                        placeholder="your@email.com"
                        value={email}
                        onChange={handleChange}
                    />
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type={passwordType}
                        name="password"
                        id="password"
                        className="form-ip"
                        placeholder="**********"
                        value={password}
                        onChange={handleChange}
                    />
                    <label htmlFor="conf-password" className="form-label">Confirm Password:</label>
                    <input
                        type={passwordType}
                        name="confPassword"
                        id="conf-password"
                        className="form-ip"
                        placeholder="**********"
                        value={confPassword}
                        onChange={handleChange}
                    />
                    <div className="show-password">
                        <input
                            type="checkbox"
                            name="show-password"
                            id="show-password"
                            onChange={handleShowPassword}
                            ref={checkBox}
                        />
                        <label htmlFor="show-password" className="form-label">Show Password</label>
                    </div>
                    <button type="submit" className="btn-submit">Register</button>
                </form>
            </div>

            {error && <Message msgClass="red" title="Error" text={error} />}
            {msg && <Message msgClass="green" title="Success" text={msg} />}
        </>
    );
};

export default Register;