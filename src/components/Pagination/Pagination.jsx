import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { pageCounter } from '../../store/selectors';
import { setCurrentPage } from '../../store/actions';
import './Pagination.scss';

const Pagination = () => {
  const dispatch = useDispatch();
  const pageCount = useSelector(pageCounter);
  const handlePageClick = ({ selected: selectedPage }) => {
    dispatch(setCurrentPage(selectedPage));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="wrapper-pagination pagination">
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="pagination-list pg-list"
        pageClassName="pg-list__link"
        previousLinkClassName="pg-list__link"
        nextLinkClassName="pg-list__link"
        disabledClassName="pg-list__link--disabled"
        activeClassName="pg-list__link--active"
      />
    </div>
  );
};
export default Pagination;
