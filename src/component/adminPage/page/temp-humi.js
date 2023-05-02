import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { dataRef } from "../../../firebase";
import tempicon from "../../../img/temp-icon.svg";
import "./page.scss";
import adminImg from "../../../img/admin.jpg";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function TempHumi() {
  const dbRef = ref(getDatabase(dataRef));
  const [Temp, setTemp] = useState("");
  const [Humi, setHumi] = useState("");

  useEffect(() => {
    get(child(dbRef, `ESP32_APP/TEMPERATURE_HISTORY`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setTemp(snapshot.val());
          console.log(Temp);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    get(child(dbRef, `ESP32_APP/HUMIDITY_HISTORY`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setHumi(snapshot.val());
          console.log(Humi);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="page">
      <nav>
        <div className="logo"></div>
        <NavLink
          to="/login/admin/"
          activeClassName="active-link"
          className="link"
        >
          Sumary
        </NavLink>
        <NavLink
          to="/login/admin/temp-humi"
          activeClassName="active-link"
          className="link"
        >
          Temp and Humi
        </NavLink>
        <NavLink
          to="/login/admin/light"
          activeClassName="active-link"
          className="link"
        >
          Light
        </NavLink>
      </nav>

      <div className="page__temphumi">
        <div className="header">
          <div>
            <h2>
              <b>Nhiệt độ và độ ẩm</b>
            </h2>
          </div>
          <div className="header__login">
            <p>Hi, BacHoang</p>
            <div className="header__login-img">
              <img src={adminImg} />
            </div>
          </div>
        </div>

        <div className="block">
          <div className="temp row">
            <div className="cards col-3">
              <div className="card">
                {Object.values(Temp)
                  .reverse()
                  .slice(0, 1)
                  .map((value, index) => (
                    <h2 key={index}>{value}</h2>
                  ))}
                <p>Nhiệt Độ</p>
              </div>
            </div>
            <div className="chart col-8">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={Object.values(Temp).slice(0, 11)}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="temp" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="humi row">
            <div className="cards col-3">
              <div className="card">
                {Object.values(Humi)
                  .reverse()
                  .slice(0, 1)
                  .map((value, index) => (
                    <h2 key={index}>{value}</h2>
                  ))}
                <p>Độ ẩm</p>
              </div>
            </div>
            <div className="chart col-8">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={Object.values(Temp).slice(0, 11)}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="temp" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
