import React from 'react';
import './nav.css';

const nav = () => {
  return (
    <>
        <nav>
            <ul className="nav-ul">
                <li className="nav-li">React - To Do</li>
                <li className="nav-li">Hello, User</li>
                <button className="btn-logout">Logout</button>
            </ul>
        </nav>
    </>
  )
}

export default nav;