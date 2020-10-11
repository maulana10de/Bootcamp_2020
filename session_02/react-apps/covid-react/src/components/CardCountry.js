import React from 'react';
import { Link } from 'react-router-dom'

const CardCountry = (props) => {
  return (
           <div className='col-12 col-sm-4 mb-3'>
      <Link
        to={`/countries-detail/${props.data.name}/${props.data.iso3}`}
        style={{ textDecoration: 'none' }}
      >
        <div className='card-header'>{props.data.name}</div>
      </Link>
    </div>
  );
};

export default CardCountry;
