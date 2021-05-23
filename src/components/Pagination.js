import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      {pageNumbers.map((pageNumber) => (
        <li key={pageNumber} className="page-item">
          <div
            style={{ cursor: "pointer" }}
            className="page-link"
            onClick={() => paginate(pageNumber)}
          >
            {pageNumber}
          </div>
        </li>
      ))}
    </nav>
  );
};

export default Pagination;
