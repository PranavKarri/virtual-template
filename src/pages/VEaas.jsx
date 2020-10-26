import React from "react";
import ReactDOM from "react-dom";
import { Link } from "@reach/router";


const VEaas = () => {
  return (
    <div className="default-content">
      <p>VEaas projects are displayed here</p>

      <li>
        <Link to="/ProjectV1">Project 1</Link>
      </li>
    </div>
  );
};
export default VEaas;
