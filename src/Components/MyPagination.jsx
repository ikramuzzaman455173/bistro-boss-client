import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Calculate the range of page numbers to display
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex items-center justify-center mt-4">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`pagination-item ${
              currentPage === number ? 'active' : ''
            }`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;