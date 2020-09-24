import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Carousel.css';

export default function CarouselCom(props) {
  return (
    <div
      className='jumbotron text-white'
      style={{
        backgroundImage: `url(${props.data.urlToImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '50vh',
        boxSizing: 'border-box',
      }}
    >
      <div className='carousel-caption d-none d-md-block mb-3'>
        <h4 className='font-weight-bold mb-2' style={{ cursor: 'pointer' }}>
          <Link
            to={{
              pathname: '/newsDetail',
              state: { dataBerita: props.data },
            }}
            style={{ textDecoration: 'none', color: '#fff' }}
          >
            {props.data.title}
          </Link>
        </h4>
        <p className='font-weight-bold'>{props.data.description}</p>
      </div>
    </div>
  );
}
