import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { dataRef } from "../../../firebase";
import "./page.scss";
import adminImg from "../../../img/admin.jpg";
import * as XLSX from "xlsx/xlsx.mjs";

export default function History() {
  const [Temps, setTemps] = useState("");
  const [Lights, setLights] = useState("");
  const [Humis, setHumi] = useState("");

  const dbRef = ref(getDatabase(dataRef));
  useEffect(() => {
    get(child(dbRef, `DHT/HumHistory`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setInterval(() => {
            setHumi(snapshot.val());
            console.log(Humis);
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
          }, 10000);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
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
  const exportToExcel = () => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Convert the data to a worksheet
    const ws = XLSX.utils.json_to_sheet(
      [
        ["Temp"], // Add the title as the header row
        ...Object.values(Temps)
          .reverse()
          .slice(0, 10)
          .map((value) => ({ value })),
      ]
    );

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Lights");

    // Save the workbook as a file
    XLSX.writeFile(wb, "lights.xlsx");
  };

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
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
          <div className="date">
            <h2>
              <b>Lịch sử</b>
            </h2>

            <p>{new Date().toLocaleString() + ""}</p>
          </div>

          <button onClick={exportToExcel}>Export to Excel</button>
          <div>
            <ul>
              <li
                onClick={() => handleTabClick(1)}
                className={activeTab === 1 ? "active" : ""}
              >
                Tab 1
              </li>
              <li
                onClick={() => handleTabClick(2)}
                className={activeTab === 2 ? "active" : ""}
              >
                Tab 2
              </li>
            </ul>
            <div>
              {activeTab === 1 && (
                <div>
                  <div className="date">
                    <h2>
                      <b>Lịch sử</b>
                    </h2>

                    <p>{new Date().toLocaleString() + ""}</p>
                  </div>
                  <div className="sumary__history">
                    <div className="sumary__history-colum">
                      <p>
                        <b>Nhiệt độ</b>
                      </p>
                      {Object.values(Temps)
                        .reverse()
                        .slice(0, 10)
                        .map((value, index) => (
                          <p key={index}>{value}</p>
                        ))}
                    </div>
                    <div className="sumary__history-colum">
                      <p>
                        <b>Độ ẩm</b>
                      </p>
                      {Object.values(Humis)
                        .reverse()
                        .slice(0, 10)
                        .map((value, index) => (
                          <p key={index}>{value}</p>
                        ))}
                    </div>
                    <div className="sumary__history-colum">
                      <p>
                        <b>Ánh sáng</b>
                      </p>
                      {Object.values(Lights)
                        .reverse()
                        .slice(0, 10)
                        .map((value, index) => (
                          <p key={index}>{value}</p>
                        ))}
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div>
                  {" "}
                  <div className="sumary__history">
                    <div className="sumary__history-colum">
                      <p>
                        <b>Nhiệt độ</b>
                      </p>
                      {Object.values(Temps)
                        .reverse()
                        .slice(0, 10)
                        .map((value, index) => (
                          <p key={index}>{value}</p>
                        ))}
                    </div>
                    <div className="sumary__history-colum">
                      <p>
                        <b>Độ ẩm</b>
                      </p>
                      {Object.values(Humis)
                        .reverse()
                        .slice(0, 10)
                        .map((value, index) => (
                          <p key={index}>{value}</p>
                        ))}
                    </div>
                    <div className="sumary__history-colum">
                      <p>
                        <b>Ánh sáng</b>
                      </p>
                      {Object.values(Lights)
                        .reverse()
                        .slice(0, 10)
                        .map((value, index) => (
                          <p key={index}>{value}</p>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
