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
} from "recharts";

export default function TempHumi() {
  const dbRef = ref(getDatabase(dataRef));
  const [Humis, setHumi] = useState("");
  const [Temps, setTemps] = useState("");
  const [Lights, setLights] = useState("");

  useEffect(() => {
    setInterval(() => {
      get(child(dbRef, `BH1750/LightHistory`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setLights(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1000);
  }, []);
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
  const dl = Object.values(Lights).reverse().slice(0, 11);
  const dataTemps = dt.reverse();
  const dataLights = dl.reverse();
  const dataHumis = dh.reverse();

  const tvData = dataTemps.map((temperature, index) => ({
    temperature,
    humidity: dataHumis[index],
    light: dataLights[index],
  }));

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
        <NavLink
          to="/login/admin/history"
          activeClassName="active-link"
          className="link"
        >
          History
        </NavLink>
        <NavLink
          to="/login/admin/screenshort"
          activeClassName="active-link"
          className="link"
        >
          screenshort
        </NavLink>
      </nav>

      <div className="page__temphumi">
        <div className="header">
          <div>
            <h2>
              <b>Ánh Sáng</b>
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
                {Object.values(Lights)
                  .reverse()
                  .slice(0, 1)
                  .map((value, index) => (
                    <h2 key={index}>{value}</h2>
                  ))}
                <p>Cường độ ánh sáng</p>
              </div>
            </div>
            <div className="chart col-8">
            <ResponsiveContainer width="90%" height={300}>
                <LineChart data={tvData}>
                  <CartesianGrid strokeDasharray="3 10" />
                  <XAxis />
                  <YAxis domain={[0, 1000]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="light" stroke="#15ff00" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
