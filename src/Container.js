import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const Container = (props) => {
  const { currentPage } = props;
  console.log(currentPage);
  const containerStyle = { transform: `translateX(-${currentPage}00%)` };

  return (
    <div className="Container" style={containerStyle}>
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
};
export default Container;
