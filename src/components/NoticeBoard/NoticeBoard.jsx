import "./NoticeBoard.css";

function NoticeBoard() {
  return (
    <aside className={`notice-board ${open ? "open" : ""}`}>
      <div className="box-conatiner">
        <div className="notice-header">
          <button className="notice-close" onClick={() => setOpen(false)}>
            <span className="close-line"></span>
            <span className="close-line"></span>
          </button>
        </div>

        <div className="notice-text poppins-regular">
          <span>N</span>
          <span>o</span>
          <span>t</span>
          <span>i</span>
          <span>c</span>
          <span>e</span>
          <span>&nbsp;</span>
          <span>B</span>
          <span>o</span>
          <span>a</span>
          <span>r</span>
          <span>d</span>
        </div>

        {!open && (
          <button className="notice-handle" onClick={() => setOpen(true)}>
            Notice Board
          </button>
        )}
      </div>
    </aside>
  );
}

export default NoticeBoard;
