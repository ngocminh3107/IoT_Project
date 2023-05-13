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
  const [relay1s, setRelay1s] = useState("");
  const [relay2s, setRelay2s] = useState("");
  const [relay3s, setRelay3s] = useState("");
  const [relay4s, setRelay4s] = useState("");
  const [relay5s, setRelay5s] = useState("");
  const [relay6s, setRelay6s] = useState("");

  const dbRef = ref(getDatabase(dataRef));
  useEffect(() => {
    setInterval(() => {

    get(child(dbRef, `DHT/HumHistory`))
      .then((snapshot) => {
        if (snapshot.exists()) {
            setHumi(snapshot.val());
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
    setInterval(() => {

    get(child(dbRef, `DHT/TempHistory`))
      .then((snapshot) => {
        if (snapshot.exists()) {
            setTemps(snapshot.val());
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

  //relayhis
  useEffect(() => {
    setInterval(() => {
      get(child(dbRef, `Relay/relay1/relay1his`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setRelay1s(snapshot.val());
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
    setInterval(() => {
      get(child(dbRef, `Relay/relay2/relay2his`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setRelay2s(snapshot.val());
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
    setInterval(() => {
      get(child(dbRef, `Relay/relay3/relay3his`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setRelay3s(snapshot.val());
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
    setInterval(() => {
      get(child(dbRef, `Relay/relay4/relay4his`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setRelay4s(snapshot.val());
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
    setInterval(() => {
      get(child(dbRef, `Relay/relay6/relay6his`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setRelay6s(snapshot.val());
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
    setInterval(() => {
      get(child(dbRef, `Relay/relay5/relay5his`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setRelay5s(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1000);
  }, []);
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();
  const exportToExcel = () => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();
  
    // Get the current day
    const currentDay = new Date().toLocaleDateString();
  
    // Convert the data to a worksheet
    const ws = XLSX.utils.json_to_sheet([
      ...Object.values(Temps)
        .reverse()
        .map((value, index) => ({
          Day: currentDay, // Set the current day as the value for the "Day" column
          Temperature: value,
          Humidity: Object.values(Humis).reverse()[index],
          Light: Object.values(Lights).reverse()[index],
        })),
    ]);
  
    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  
    // Save the workbook
    XLSX.writeFile(wb, "data.xlsx");
  };

  const [activeTab, setActiveTab] = useState(1);
  const [activeTabs, setActiveTabs] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleTabClicks = (tabNumber) => {
    setActiveTabs(tabNumber);
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
      <div className="page__history">
        <div className="">
          <div className="header">
            <div></div>
            <div className="header__login">
              <p>Hi, BacHoang</p>
              <div className="header__login-img">
                <img src={adminImg} />
              </div>
            </div>
          </div>

          <div className="historybox">
            <div className="date">
              <h2>
                <b>Lịch sử</b>
              </h2>

              <p>{new Date().toLocaleString() + ""}</p>
            </div>
            <div className="historybox__tab">
              <div
                onClick={() => handleTabClick(1)}
                className={activeTab === 1 ? "active" : ""}
              >
                Dữ Liệu
              </div>
              <div
                onClick={() => handleTabClick(2)}
                className={activeTab === 2 ? "active" : ""}
              >
                Thiết bị
              </div>
            </div>
            <div className="historybox__data">
              {activeTab === 1 && (
                <div>
                  <div className="data">
                  <div className="data__colum">
                            <p>
                              <b>Thời gian</b>
                            </p>
                            {Object.values(relay2s)
                              .reverse()
                              .slice(0, 10)
                              .map((value, index) => (
                                <p key={index} className="datas">
                                  {formattedDate}
                                </p>
                              ))}
                          </div>
                    <div className="data__colum">
                      <p>
                        <b>Nhiệt độ</b>
                      </p>
                      {Object.values(Temps)
                        .reverse()
                        .slice(0, 10)
                        .map((value, index) => (
                          <p key={index} className="datas">
                            {value}
                          </p>
                        ))}
                    </div>
                    <div className="data__colum">
                      <p>
                        <b>Độ ẩm</b>
                      </p>
                      {Object.values(Humis)
                        .reverse()
                        .slice(0, 10)
                        .map((value, index) => (
                          <p key={index} className="datas">
                            {value}
                          </p>
                        ))}
                    </div>
                    <div className="data__colum">
                      <p>
                        <b>Ánh sáng</b>
                      </p>
                      {Object.values(Lights)
                        .reverse()
                        .slice(0, 10)
                        .map((value, index) => (
                          <p key={index} className="datas">
                            {value}
                          </p>
                        ))}
                    </div>
                  </div>
                  <button onClick={exportToExcel}>Export to Excel</button>
                </div>
              )}

              {activeTab === 2 && (
                <div>
                  <div className="historybox__tab-intab">
                    <div
                      onClick={() => handleTabClicks(1)}
                      className={activeTabs === 1 ? "activetab" : ""}
                    >
                      Đèn sưởi ấm
                    </div>
                    <div
                      onClick={() => handleTabClicks(2)}
                      className={activeTabs === 2 ? "activetab" : ""}
                    >
                      Đèn đuổi cú
                    </div>
                    <div
                      onClick={() => handleTabClicks(3)}
                      className={activeTabs === 3 ? "activetab" : ""}
                    >
                      Quạt
                    </div>
                    <div
                      onClick={() => handleTabClicks(4)}
                      className={activeTabs === 4 ? "activetab" : ""}
                    >
                      Bơm
                    </div>
                    <div
                      onClick={() => handleTabClicks(5)}
                      className={activeTabs === 5 ? "activetab" : ""}
                    >
                      Bật phun sương
                    </div>
                    <div
                      onClick={() => handleTabClicks(6)}
                      className={activeTabs === 6 ? "activetab" : ""}
                    >
                      Loa
                    </div>
                  </div>
                  <div className="equiement">
                    {activeTabs === 1 && (
                      <div>
                        <div className="data">
                          <div className="data__colum">
                            <p>
                              <b>Thời gian</b>
                            </p>
                            {Object.values(relay1s)
                              .reverse()
                              .slice(0, 10)
                              .map((value, index) => (
                                <p key={index} className="datas">
                                  {formattedDate}
                                </p>
                              ))}
                          </div>
                          <div className="data__colum">
                            <p>
                              <b>Thiết bị</b>
                            </p>
                            {Object.values(relay1s)
                              .reverse()
                              .slice(0, 10)
                              .map((value, index) => (
                                <p key={index} className="datas">
                                  Đèn sưởi ấm
                                </p>
                              ))}
                          </div>
                          <div className="data__colum">
                            <p>
                              <b>Trạng thái</b>
                            </p>
                            {Object.values(relay1s)
                              .reverse()
                              .slice(0, 10)
                              .map((value, index) => (
                                <p key={index} className="datas">
                                  <a className={value === 1 ? "status-green" : "status-red"}>
                                    {value === 1 ? "on" : "off"}
                                  </a>
                                </p>
                              ))}
                          </div>
                        </div>
                        <button onClick={exportToExcel}>Export to Excel</button>
                      </div>
                    )}
                    {activeTabs === 2 && (
                      <div>
                        <div className="data">
                          <div className="data__colum">
                            <p>
                              <b>Thời gian</b>
                            </p>
                            {Object.values(relay2s)
                              .reverse()
                              .slice(0, 10)
                              .map((value, index) => (
                                <p key={index} className="datas">
                                  {formattedDate}
                                </p>
                              ))}
                          </div>
                          <div className="data__colum">
                            <p>
                              <b>Thiết bị</b>
                            </p>
                            {Object.values(relay2s)
                              .reverse()
                              .slice(0, 10)
                              .map((value, index) => (
                                <p key={index} className="datas">
                                  Đèn đuổi cú
                                </p>
                              ))}
                          </div>
                          <div className="data__colum">
                            <p>
                              <b>Trạng thái</b>
                            </p>
                            {Object.values(relay2s)
                              .reverse()
                              .slice(0, 10)
                              .map((value, index) => (
                                <p key={index} className="datas">
                                  <a className={value === 1 ? "status-green" : "status-red"}>
                                    {value === 1 ? "on" : "off"}
                                  </a>
                                </p>
                              ))}
                          </div>
                        </div>
                        <button onClick={exportToExcel}>Export to Excel</button>
                      </div>
                    )}
                    {activeTabs === 3 && (
                      <div>
                        <div className="data">
                          <div className="data__colum">
                            <p>
                              <b>Thời gian</b>
                            </p>
                            {Object.values(relay3s)
                              .reverse()
                              .slice(0, 10)
                              .map((value, index) => (
                                <p key={index} className="datas">
                                  {formattedDate}

                                </p>
                              ))}
                          </div>
                          <div className="data__colum">
                            <p>
                              <b>Thiết bị</b>
                            </p>
                            {Object.values(relay3s)
                              .reverse()
                              .slice(0, 10)
                              .map((value, index) => (
                                <p key={index} className="datas">
                                  Quạt
                                </p>
                              ))}
                          </div>
                          <div className="data__colum">
                            <p>
                              <b>Trạng thái</b>
                            </p>
                            {Object.values(relay3s)
                              .reverse()
                              .slice(0, 10)
                              .map((value, index) => (
                                <p key={index} className="datas">
                                  <a className={value === 1 ? "status-green" : "status-red"}>
                                    {value === 1 ? "on" : "off"}
                                  </a>
                                </p>
                              ))}
                          </div>
                        </div>
                        <button onClick={exportToExcel}>Export to Excel</button>
                      </div>
                    )}
                    {activeTabs === 4 && (
                      <div>
                        <div className="data">
                          <div className="data__colum">
                            <p>
                              <b>Thời gian</b>
                            </p>
                            {Object.values(relay4s)
                              .reverse()
                              .slice(0, 10)
                              .map((value, index) => (
                                <p key={index} className="datas">
                                  {formattedDate}

                                </p>
                              ))}
                          </div>
                          <div className="data__colum">
                            <p>
                              <b>Thiết bị</b>
                            </p>
                            {Object.values(relay4s)
                              .reverse()
                              .slice(0, 10)
                              .map((value, index) => (
                                <p key={index} className="datas">
                                  Bơm
                                </p>
                              ))}
                          </div>
                          <div className="data__colum">
                            <p>
                              <b>Trạng thái</b>
                            </p>
                            {Object.values(relay4s)
                              .reverse()
                              .slice(0, 10)
                              .map((value, index) => (
                                <p key={index} className="datas">
                                <a className={value===1 ? "status-green": "status-red"}>
                                  {value === 1 ? "on" : "off"}
                                </a>
                              </p>
                              ))}
                          </div>
                        </div>
                        <button onClick={exportToExcel}>Export to Excel</button>
                      </div>
                    )}
                    {activeTabs === 5 && (
                      <div>
                        <div className="data">
                          <div className="data__colum">
                            <p>
                              <b>Thời gian</b>
                            </p>
                            {Object.values(relay5s)
                              .reverse()
                              .slice(0, 10)
                              .map((value, index) => (
                                <p key={index} className="datas">
                                  {formattedDate}
                                </p>
                              ))}
                          </div>
                          <div className="data__colum">
                            <p>
                              <b>Thiết bị</b>
                            </p>
                            {Object.values(relay5s)
                              .reverse()
                              .slice(0, 10)
                              .map((value, index) => (
                                <p key={index} className="datas">
                                  Phun sương
                                </p>
                              ))}
                          </div>
                          <div className="data__colum">
                            <p>
                              <b>Trạng thái</b>
                            </p>
                            {Object.values(relay5s)
                              .reverse()
                              .slice(0, 10)
                              .map((value, index) => (
                                <p key={index} className="datas">
                                  <a className={value===1 ? "status-green": "status-red"}>
                                    {value === 1 ? "on" : "off"}
                                  </a>
                                </p>
                              ))}
                          </div>
                        </div>
                        <button onClick={exportToExcel}>Export to Excel</button>
                      </div>
                    )}
                    {activeTabs === 6 && (
                      <div>
                        <div className="data">
                          <div className="data__colum">
                            <p>
                              <b>Thời gian</b>
                            </p>
                            {Object.values(relay6s)
                              .reverse()
                              .slice(0, 10)
                              .map((value, index) => (
                                <p key={index} className="datas">
                                  {formattedDate}
                                </p>
                              ))}
                          </div>
                          <div className="data__colum">
                            <p>
                              <b>Thiết bị</b>
                            </p>
                            {Object.values(relay6s)
                              .reverse()
                              .slice(0, 10)
                              .map((value, index) => (
                                <p key={index} className="datas">
                                  Loa
                                </p>
                              ))}
                          </div>
                          <div className="data__colum">
                            <p>
                              <b>Trạng thái</b>
                            </p>
                            {Object.values(relay6s)
                              .reverse()
                              .slice(0, 10)
                              .map((value, index) => (
                                <p key={index} className="datas">
                                <a className={value===1 ? "status-green": "status-red"}>
                                  {value === 1 ? "on" : "off"}
                                </a>
                              </p>
                              ))}
                          </div>
                        </div>
                        <button onClick={exportToExcel}>Export to Excel</button>
                      </div>
                    )}
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
