import "./Body.css";
import Category from "./Category";
import { useContext } from "react";
import { WidgetContext } from "../WidgetsContext";
const Body = () => {
  const { categories } = useContext(WidgetContext);
  return (
    <>
      <div className="bodyContainer">
        {categories.map((clas) => {
          return <Category key={clas.id} classData={clas} />;
        })}
      </div>
    </>
  );
};
export default Body;
