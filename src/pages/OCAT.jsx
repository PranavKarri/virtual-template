import React from "react";
import ReactDOM from "react-dom";
import { Link } from "@reach/router";


const OCAT = () => {
  return (
    <div className="default-content">
      <p>OCAT projects are displayed here</p>

      <li>
        <Link to="/ProjectO1">Project 1</Link>
      </li>
    </div>
  );
};
export default OCAT;
