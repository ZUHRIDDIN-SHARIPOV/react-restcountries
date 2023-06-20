import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/header/Header";

const Routing = ({ darkMode, checkDark }) => {
  return (
    <>
      <BrowserRouter>
        <Header darkMode={darkMode} checkDark={checkDark} />
        <Routes>
          <Route path="/error" element={<Navigate to={"/error"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
