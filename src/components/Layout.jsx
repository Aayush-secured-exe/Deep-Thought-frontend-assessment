import JourneyBoard from "./JourneyBoard/JourneyBoard";
import { Outlet } from "react-router-dom";
import NoticeBoard from "./NoticeBoard/NoticeBoard";
import FloatingButtons from "./FloatingButtons/FloatingButtons";

function Layout({ children }) {
  return (
    <div className="app-layout">
      <JourneyBoard />
      <main className="main-content">
        <Outlet />
      </main>
      <NoticeBoard />
      <FloatingButtons />
    </div>
  );
}

export default Layout;
