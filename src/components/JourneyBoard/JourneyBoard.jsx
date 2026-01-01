import { useState } from "react";
import { projectData } from "../../Data/projectData";
import arrowIcon from "/Arrow.png";
import "./JourneyBoard.css";

export default function JourneyBoard() {
  const [open, setOpen] = useState(false);

  return (
    <aside className={`journey-board ${open ? "open" : ""}`}>
      <div className="journey-header">
        <button className="toggle-btn" onClick={() => setOpen((prev) => !prev)}>
          <img
            src={arrowIcon}
            alt="toggle"
            className={`toggle-icon ${open ? "rotate" : ""}`}
          />
        </button>
      </div>

      <div className="journey-body">
        {!open && <div className="journey-step">1</div>}

        {open && (
          <>
            <h4 className="journey-title poppins-semibold">
              <li>Explore the world of management</li>
            </h4>

            <ul className="journey-list">
              {projectData.tasks.map((task) => (
                <li key={task.task_id} className="journey-item poppins-regular">
                  <span className="text-gap">{task.task_title}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </aside>
  );
}
