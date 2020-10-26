import React from "react";
import ReactDOM from "react-dom";
import { Link } from "@reach/router";


const CECH = () => {
  return (
    <div className="default-content">
      <p>CECH Web projects are displayed here</p>

      <li>
        <Link to="/ProjectC1">Project 1</Link>
      </li>
    </div>
  );
};
export default CECH;
