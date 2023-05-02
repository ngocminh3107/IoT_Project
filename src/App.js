import React, { useState, useEffect } from "react";
import HomePage from "./homePage";
import Login from "./component/loginPage/loginPage";
import AdminPage from "./component/adminPage/adminpage";
import SumaryPage from "./component/adminPage/page/sumaryPage";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import TempHumi from "./component/adminPage/page/temp-humi";
import Light from "./component/adminPage/page/light";
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
        <Route path="/login/admin" element={<AdminPage />} />
        <Route path="/login/admin/" element={<SumaryPage />} />
        <Route path="/login/admin/temp-humi" element={<TempHumi />} />
        <Route path="/login/admin/light" element={<Light />} />
      </Routes>
    </>
  );
}

export default App;
