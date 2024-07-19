import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Message from '../Message/msg';

import './auth.css';


const login = () => {

  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [passwordType, setPasswordType] = useState('password');

  const checkBox = useRef();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleShowPassword = () => {
    setPasswordType(checkBox.current.checked ? "text" : "password");
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const { email, password } = formData;

  const handleSubmit = async (e) => {
    setError('');
    setMsg('');
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      console.log(response.data.msg);
      console.log(response.data.token);
      navigate('/home');
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
        setError(error.response.data.msg || "Something gone wrong.");
      } else if (error.request) {
        console.error('Error request:', error.request);
        setError('No response received from server');
      } else {
        console.error('Error message:', error.message);
        setError('Error: ' + error.message);
      }
    }
  };

  return (
    <>
      <div className="form-container">
        <div className="auth-nav">
          <Link className="btn-auth-nav auth-active-nav" to="/login">Login</Link>
          <Link className="btn-auth-nav" to="/register">Register</Link>
        </div>
        <form onSubmit={handleSubmit} className="form-auth">
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
          <button className="btn-submit">Login</button>
        </form>
      </div>

      {error && <Message msgClass="red" title="Error" text={error} />}
      {msg && <Message msgClass="green" title="Success" text={msg} />}
    </>
  )
}

export default login;