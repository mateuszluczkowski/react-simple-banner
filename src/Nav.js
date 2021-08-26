import { useState, useEffect } from "react";
const Nav = (props) => {
  const [page, setPage] = useState(props.currentPage);
  const handleClick = (sign) => {
    setPage(() => {
      if (page < 0) return 0;
      if (page > 2) return 2;
      return page + sign;
    });
  };

  useEffect(() => {
    props.setCurrentPage(page);
  });
  return (
    <div className="Nav">
      <button
        disabled={page === 0}
        onClick={() => {
          handleClick(-1);
        }}
        className="Nav__button Nav__button--left"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        disabled={page === 2}
        onClick={() => {
          handleClick(1);
        }}
        className="Nav__button Nav__button--right"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
      <div className="Nav__dots"></div>
    </div>
  );
};
export default Nav;
