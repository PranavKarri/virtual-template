import React from "react";
import ReactDOM from "react-dom";
import { Link } from "@reach/router";

const DevOps = () => {
  return (
    <div className="default-content">
      <p>DevOps projects are displayed here</p>

      <li>
        <Link to="/ProjectD1">Project 1</Link>
      </li>
    </div>
  );
};
export default DevOps;
