import { useState } from "react";
import Widget from "./Widget";
import "./Category.css";
const Category = ({ classData }) => {
  const [classdata, setclassdata] = useState(classData);
  console.log(`${classdata.category} widgets: ${classdata.widgets.length}`);
  return (
    <>
      <div>
        <h3>{classdata.category}</h3>
        <div className="categoryContainer">
          <Widget widgetNumber={1} />
          <Widget widgetNumber={2} />
          <Widget widgetNumber={3} />
          <Widget widgetNumber={4} />
        </div>
      </div>
    </>
  );
};
export default Category;
