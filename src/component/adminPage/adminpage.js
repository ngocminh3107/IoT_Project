import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import SumaryPage from "./page/sumaryPage";
export default function AdminPage() {
  return (
    <>
       <nav>
        <Link to="/login/admin/">Sumary</Link>
        <Link to="/login/admin/temp-humi">Temp and Humi</Link>
        <Link to="/login/admin/light">Light</Link>
      </nav>
      <Routes>
        <Route path="/login/admin/h" element={<SumaryPage />} />
      </Routes>
    </>
  );
}
