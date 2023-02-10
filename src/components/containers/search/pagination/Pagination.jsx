import React from "react";
import ReactPaginate from "react-paginate";
import "./pagination.scss";
const Pagination = ({ totalPages, selectedPage, onClick }) => {
  // console.log(selectedPage);
  return (
    <div className="search-pagination">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={6}
        onPageChange={(data) => onClick(data)}
        forcePage={selectedPage}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Pagination;
