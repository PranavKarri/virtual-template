import React from "react";
import FancyDiv from "../components/FancyDiv";
import Time01 from "./clocktimer"


const IndexPage = () => (
  <div className="default-content">
    <div className="content">
      <div style={{ textAlign: `center` }}>
        <div className="header">
          <h1 className="header">
            IT EXPO <span className="text-color-primary">2021</span>
          </h1>

          <h2 className="header" data-reveal-delay="400" >
            Where People Meet, Where Ideas Evolve, Where the Future is Made.
          </h2>
        </div>

        <div className="content">
          <iframe
            className="center"
            width="560"
            height="415"
            src="https://www.youtube.com/embed/5qap5aO4i9A"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
{/* <div>
          <Time01 />
</div> */}
          <table>
            <body>
              <tr>
                <th>08:00</th>
                <td colSpan="4" rowSpan="1" className="stage-saturn">
                  Welcome
                </td>
              </tr>
              <tr>
                <th>08:30</th>
                <td colSpan="4" rowSpan="1" className="stage-saturn">
                  Introduction
                </td>
              </tr>
              <tr>
                <th>09:00</th>
                <td colSpan="4" className="stage-earth">
                  Speaker One <span></span>
                </td>
              </tr>
              <tr>
                <th>09:30</th>
                <td colSpan="4" className="stage-earth">
                  Speaker Two <span></span>
                </td>
              </tr>
              <tr>
                <th>10:00</th>
                <td colSpan="4" className="stage-earth">
                  Speaker Three <span></span>
                </td>
              </tr>
              <tr>
                <th>10:30</th>
                <td colSpan="4" className="stage-earth">
                  Speaker Four <span></span>
                </td>
              </tr>
              <tr>
                <th>11:00</th>
                <td rowSpan="5" className="stage-venus">
                  Speaker Five <span></span>
                </td>
              </tr>
            </body>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
