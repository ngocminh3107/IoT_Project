import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { dataRef } from "../../../firebase";
import "./page.scss";
import adminImg from "../../../img/admin.jpg";
import tempicon from "../../../img/temp-icon.svg";
import humiicon from "../../../img/humi-icon.svg";
import sunicon from "../../../img/sun-icon.svg";
import VideoStreams from "./visdeo";
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

export default function SumaryPage() {
  const dbRef = ref(getDatabase(dataRef));
  const [replay1Status, setReplay1Status] = useState("");
  const [replay2Status, setReplay2Status] = useState("");
  const [Temp, setTemp] = useState("");
  useEffect(() => {
    get(child(dbRef, `ESP32_APP`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setReplay1Status(snapshot.val().relay);
          setReplay2Status(snapshot.val().relay2);
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

  const toggleReplay1 = () => {
    const newStatus = replay1Status === "1" ? "0" : "1";
    const currentTime = new Date().toLocaleTimeString(); // get current time
    const updates = {
      relay: newStatus,
      timeon:
        newStatus === "1"
          ? currentTime
          : replay1Status === "1"
          ? replay1Status
          : null, // update timeon if turning on, or keep the previous value if already off
      timeoff: newStatus === "0" ? currentTime : null, // update timeoff if turning off, or clear the value if already off
    };
    set(child(dbRef, "TStatus/Light"), updates)
      .then(() => {
        setReplay1Status(newStatus);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleReplay2 = () => {
    const newStatus = replay2Status === "1" ? "0" : "1";
    set(child(dbRef, "TStatus/relay2"), newStatus)
      .then(() => setReplay2Status(newStatus))
      .catch((error) => {
        console.error(error);
      });
  };
  const toggleClass = (buttonId) => {
    const button = document.getElementById(buttonId);
    button.classList.toggle("actives");
  };

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
      <div className="page__sumary">
        <div className="sumary">
          <div className="header">
            <div></div>
            <div className="header__login">
              <p>Hi, BacHoang</p>
              <div className="header__login-img">
                <img src={adminImg} />
              </div>
            </div>
          </div>

          <div className="sumary__category">
            <div className="cards ">
              <div className="card">
                <h2>{Temp.HUMIDITY}</h2>
                <p>Nhiệt Độ</p>
              </div>
              <img src={tempicon} />
            </div>
            <div className="cards">
              <div className="card">
                <h2>{Temp.HUMIDITY}</h2>
                <p>Độ Ẩm</p>
              </div>
              <img src={humiicon} />
            </div>

            <div className="cards ">
              <div className="card">
                <h2>{Temp.HUMIDITY}</h2>
                <p>Ánh sáng</p>
              </div>
              <img src={sunicon} />
            </div>
            <div className="cards">
              <VideoStreams />
            </div>
          </div>

          <div className="sumary__statistical row">
            <div className="sumary__statistical-chart col-7">
              <ResponsiveContainer width="80%" height={400}>
                <LineChart data={Object.values(Temp).slice(0, 20)}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="temp" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="sumary__statistical-button col-4">
              <div className="music-bar">prev pause next</div>
              <div className="buttons">
                <p>Ấn để {replay1Status === "1" ? "tắt" : "bật"} bóng đèn </p>
                <button
                  id="light"
                  onClick={() => {
                    toggleReplay1();
                    toggleClass("light");
                  }}
                >
                  <div className="circal"></div>
                </button>
              </div>

              <div className="buttons">
                <p>Ấn để {replay2Status === "1" ? "tắt" : "bật"} quạt </p>
                <button
                  id="fan"
                  onClick={() => {
                    toggleReplay2();
                    toggleClass("fan");
                  }}
                >
                  <div className="circal"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
