import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainContent/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
