import ReactPaginate from "react-paginate";
import React from "react";

const Pagination = ({ pageCount, onPageClick, forcePage }) => (
  <ReactPaginate
    previousLabel={"<<"}
    nextLabel={">>"}
    breakLabel={"..."}
    pageLinkClassName={"page-link"}
    previousClassName={"page-link"}
    nextClassName={"page-link"}
    breakClassName={"page-link"}
    containerClassName={"pagination"}
    pageClassName={"page-item"}
    marginPagesDisplayed={1}
    pageRangeDisplayed={1}
    activeClassName={"active"}
    onPageChange={onPageClick}
    pageCount={pageCount}
    forcePage={forcePage}
  />
);

export default Pagination;
