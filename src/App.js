import React, { useState, useEffect } from "react";
import HomePage from "./homePage";
import Login from "./component/loginPage/loginPage";
import SumaryPage from "./component/adminPage/page/sumaryPage";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import TempHumi from "./component/adminPage/page/temp-humi";
import Light from "./component/adminPage/page/light";
import History from "./component/adminPage/page/history";
import ImgScreenshort from "./component/adminPage/page/imgScreenshort";
import "./app.scss"
function App() {
  return (
    <>
      <nav>
        <Link to="/"></Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/admin/" element={<SumaryPage />} />
        <Route path="/login/admin/temp-humi" element={<TempHumi />} />
        <Route path="/login/admin/light" element={<Light />} />
        <Route path="/login/admin/light" element={<Light />} />
        <Route path="/login/admin/history" element={<History />} />
        <Route path="/login/admin/screenshort" element={<ImgScreenshort />} />
      </Routes>
    </>
  );
}

export default App;
