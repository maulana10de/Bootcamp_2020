import React from 'react';

export const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  console.log('item per page', itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='col-12'>
      <nav className='d-flex flex-row align-self-center justify-content-end'>
        <ul className='pagination'>
          <li className='page-item'>
            <a class='page-link' href='#' aria-label='Previous'>
              <span aria-hidden='true'>&laquo;</span>
              <span class='sr-only'>Previous</span>
            </a>
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className='page-item'
              style={{ cursor: 'pointer' }}
            >
              <a onClick={() => paginate(number)} className='page-link'>
                {number}
              </a>
            </li>
          ))}

          <li class='page-item'>
            <a class='page-link' href='#' aria-label='Next'>
              <span aria-hidden='true'>&raquo;</span>
              <span class='sr-only'>Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
