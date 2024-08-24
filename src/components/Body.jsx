import "./Body.css";
import Category from "./Category";
import data from "../data.json";
const Body = () => {
  return (
    <>
      <div className="bodyContainer">
        {data.map((clas) => {
          return <Category classData={clas} />;
        })}
      </div>
    </>
  );
};
export default Body;
