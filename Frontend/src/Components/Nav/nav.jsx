import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Message from '../Message/msg';
import './nav.css';

const Nav = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleLogout = async () => {
    setError('');
    try {
      await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      setError('Something went wrong.');
    }
  };

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/user', { withCredentials: true });
      setEmail(response.data.email);
      setName(response.data.username);
    } catch (error) {
      console.error('Failed to fetch user details:', error);
      setError('Failed to fetch user details.');
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
      <nav>
        <ul className="nav-ul">
          <li className="nav-li">React - To Do</li>
          {name && <li className="nav-li">Hello, {name}</li>}
          <li className="nav-li">{email ? email : 'Loading...'}</li>
          <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </ul>
      </nav>
      {error && <Message msgClass="red" title="Error" text={error} />}
    </>
  );
};

export default Nav;