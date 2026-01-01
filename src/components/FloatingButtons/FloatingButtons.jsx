import "./FloatingButtons.css";
import helpIcon from "/question-mark.png";
import peopleIcon from "/meeting.png";
import calendarIcon from "/schedule.png";

function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <button className="fab">
        <img src={helpIcon} alt="Help" />
      </button>

      <button className="fab">
        <img src={peopleIcon} alt="Community" />
      </button>

      <button className="fab">
        <img src={calendarIcon} alt="Schedule" />
      </button>
    </div>
  );
}

export default FloatingButtons;
