import { useState } from "react";
import Container from "./Container";
import Nav from "./Nav";
const Square = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNavClick = (currentPage) => {
    setCurrentPage((prevState) => {
      if (currentPage < 0) return 0;
      if (currentPage > 2) return 2;
      return currentPage;
    });
  };
  return (
    <div className="Square">
      <Nav setCurrentPage={handleNavClick} currentPage={currentPage} />
      <Container currentPage={currentPage} />
    </div>
  );
};
export default Square;
