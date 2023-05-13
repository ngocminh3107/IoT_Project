import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { dataRef } from "../../../firebase";
import tempicon from "../../../img/temp-icon.svg";
import ChartExample from "./visdeo";
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
  Bar,
  BarChart,
  Area
} from "recharts";

export default function TempHumi() {
  const dbRef = ref(getDatabase(dataRef));
  const [Humis, setHumi] = useState("");
  const [Temps, setTemps] = useState("");

  useEffect(() => {
    get(child(dbRef, `DHT/HumHistory`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setInterval(() => {
            setHumi(snapshot.val());
          }, 1000);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    get(child(dbRef, `DHT/TempHistory`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setInterval(() => {
            setTemps(snapshot.val());
          }, 1000);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const dt = Object.values(Temps).reverse().slice(0, 11);
  const dh = Object.values(Humis).reverse().slice(0, 11);
  const dataTemps = dt.reverse();
  const dataHumis = dh.reverse();






  const tvData = dataTemps.map((temperature, index) => ({
    temperature,
    humidity: dataHumis[index],
  }));
  const temperatures = tvData.map(item => item.temperature);
  const minTemperature = Math.min(...temperatures);
  const maxTemperature = Math.max(...temperatures);
  const humidityValues = tvData.map(item => item.humidity);

  // Find the maximum and minimum values
  const maxHumidity = Math.max(...humidityValues);
  const minHumidity = Math.min(...humidityValues);


  return (
    <div className="page">
      <nav>
        <div className="logo"></div>
        <NavLink
          to="/login/admin/"
          activeClassName="active-link"
          className="link"
        >
          Tổng quan
        </NavLink>
        <NavLink
          to="/login/admin/temp-humi"
          activeClassName="active-link"
          className="link"
        >
          Nhiệt độ và độ ẩm
        </NavLink>
        <NavLink
          to="/login/admin/light"
          activeClassName="active-link"
          className="link"
        >
          Ánh sáng
        </NavLink>
        <NavLink
          to="/login/admin/history"
          activeClassName="active-link"
          className="link"
        >
          Lịch sử hoạt động
        </NavLink>
        <NavLink
          to="/login/admin/screenshort"
          activeClassName="active-link"
          className="link"
        >
          Ảnh
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
                {Object.values(Temps)
                  .reverse()
                  .slice(0, 1)
                  .map((value, index) => (
                    <h2 key={index}>{value}</h2>
                  ))}
                <p>Nhiệt Độ</p>
              </div>
            </div>
            <div className="chart col-8">
              <ResponsiveContainer width="90%" height={300}>
                <LineChart data={tvData}>
                  <CartesianGrid strokeDasharray="3 10" />
                  <XAxis />
                  <YAxis domain={[minTemperature, maxTemperature]} />
                  <Tooltip />
                  <Legend />

                  <Line
                    type="monotone"
                    dataKey="temperature"
                    stroke="#f71505"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="humi row">
            <div className="cards col-3">
              <div className="card">
                {Object.values(Humis)
                  .reverse()
                  .slice(0, 1)
                  .map((value, index) => (
                    <h2 key={index}>{value}</h2>
                  ))}
                <p>Độ ẩm</p>
              </div>
            </div>
            <div className="chart col-8">
              <ResponsiveContainer width="90%" height={300}>
                <LineChart data={tvData}>
                  <CartesianGrid strokeDasharray="3 10" />
                  <XAxis />
                  <YAxis domain={[minHumidity, maxHumidity]} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="humidity" stroke="#0511f7" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div></div>
        </div>
        a
      </div>
    </div>
  );
}
