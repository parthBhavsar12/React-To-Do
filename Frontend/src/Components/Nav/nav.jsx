import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Message from '../Message/msg';
import axios from 'axios';
import './nav.css';

const Nav = () => {
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const handleLogout = async () => {
    setError('');
    try {
      await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      setError("Something gone wrong.");
    }
  };

  return (
    <>
      <nav>
        <ul className="nav-ul">
          <li className="nav-li">React - To Do</li>
          <li className="nav-li">Hello, User</li>
          <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </ul>
      </nav>
      {error && <Message msgClass="red" title="Error" text={error} />}
    </>
  );
};

export default Nav;