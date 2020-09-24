import React from 'react';
import moment from 'moment';

const NewsDetail = ({ location }) => {
  console.log('detail props:', location);
  return (
    <div className='row'>
      <div className='col-12'>
        <img
          src={location.state.dataBerita.urlToImage}
          height='50%'
          alt='newsImage'
          className='card-img mb-5'
        />
        <h4>{location.state.dataBerita.title}</h4>
        <hr />
        <p className='text-muted'>
          Author : {location.state.dataBerita.author} |
          {moment(location.state.dataBerita.publishedAt).format(
            'MMMM Do YYYY, h:mm:ss a'
          )}
          | {location.state.dataBerita.source.name}
        </p>
        <hr />
        <p>{location.state.dataBerita.content}</p>
      </div>
    </div>
  );
};

export default NewsDetail;
