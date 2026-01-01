import { useState } from "react";
import "./LastCard.css";
import arrowIcon from "/up-arrow.svg";

function LastCard() {
  const [openIntro, setOpenIntro] = useState(true);
  const [openThread, setOpenThread] = useState(true);

  return (
    <>
      <div className="asset-bodyL">
        <div className="collapse-section">
          <div
            className="collapse-header"
            onClick={() => setOpenIntro((p) => !p)}
          >
            <img
              src={arrowIcon}
              alt="arrow"
              className={`arrow ${openIntro ? "open" : ""}`}
            />
            <span>Introduction</span>
          </div>

          {openIntro && (
            <div className="collapse-content">
              <p>The 4SA Method , How to bring a idea into progress ?</p>
              <span className="see-more">See More</span>
            </div>
          )}
        </div>

        <div className="collapse-section">
          <div
            className="collapse-header"
            onClick={() => setOpenThread((p) => !p)}
          >
            <img
              src={arrowIcon}
              alt="arrow"
              className={`arrow ${openThread ? "open" : ""}`}
            />
            <span>Thread A</span>
          </div>

          {openThread && (
            <div className="collapse-content">
              <p>
                How are you going to develop your strategy ? Which method are
                you going to use to develop a strategy ? What if the project is
                lengthy?
              </p>
              <span className="see-more">See More</span>
            </div>
          )}
        </div>

        <div className="example-box">
          <p>Example 1</p>
        </div>
        <p className="example-text">
          You have a concept , How will you put into progress?
        </p>
      </div>
    </>
  );
}

export default LastCard;
