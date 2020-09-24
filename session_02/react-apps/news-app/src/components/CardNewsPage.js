import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default ({ berita }) => {
  return (
    <div className='row card mb-2'>
      <h4 className='card-header'>{berita.title}</h4>
      <div className='card-body'>
        <h5 className='card-title text-muted'>
          Author : {berita.author}, Source: {berita.source.name}
        </h5>
        <p className='card-text'>
          <small className='text-muted'>
            {moment(berita.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}
          </small>
        </p>
        <p className='card-text'>{berita.description}</p>
        <Link
          to={{
            pathname: '/newsDetail',
            state: { dataBerita: berita },
          }}
        >
          read more
        </Link>
      </div>
    </div>
  );
};
