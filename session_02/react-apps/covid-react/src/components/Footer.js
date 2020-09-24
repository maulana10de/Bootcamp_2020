import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='row'>
      <nav
        className='navbar navbar-light bg-light justify-content-end'
        style={{ height: '7vh', width: '100%', backgroundColor: '#d0d4d8' }}
      >
        <Link to='/'>copyright @Ade Maulana</Link>
      </nav>
    </div>
  );
}
