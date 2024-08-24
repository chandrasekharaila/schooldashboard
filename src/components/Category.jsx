import { useState } from "react";
import Widget from "./Widget";
import "./Category.css";

const Category = ({ classData }) => {
  const [classdata, setclassdata] = useState(classData);
 
  return (
    <>
      <div>
        <h3>{classdata.category}</h3>
        <div className="categoryContainer">
          <Widget widgetNumber={1} categoryID={classData.id}/>
          <Widget widgetNumber={2} categoryID={classData.id}/>
          <Widget widgetNumber={3} categoryID={classData.id}/>
          <Widget widgetNumber={4} categoryID={classData.id}/>
        </div>
      </div>
    </>
  );
};

export default Category;
