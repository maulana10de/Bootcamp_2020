import React from 'react';

const CardProvince = (props) => {
  return (
    <div className='col-12 col-sm-4 mb-3'>
      <div className='card' key={props.idx}>
        <div className='card-header'>{props.data.provinsi}</div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            Positif : {props.data.kasusPosi.toLocaleString()}
          </li>
          <li className='list-group-item'>
            Sembuh : {props.data.kasusSemb.toLocaleString()}
          </li>
          <li className='list-group-item'>
            Meninggal : {props.data.kasusMeni.toLocaleString()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardProvince;
