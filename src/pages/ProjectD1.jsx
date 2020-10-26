import React from "react";
import ReactDOM from "react-dom";
 import Data from "../data/posts.json"


const ProjectD1 = () => {
  return (
    <div>
      <div className="default-content">
      <h1 className="header" >
      DevOps Project </h1>
</div>

   <div className="posts">
     
    {<div key={Data[3].id}>
           <h4>{Data[3].title}</h4>
       <p>{Data[3].body}</p>
       </div>
     }

  
   </div>

  

        <iframe
          className="center"
          width="560"
          height="415"
          src="https://www.youtube.com/embed/5qap5aO4i9A"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>



      </div>
    
  );
};
export default ProjectD1;













    