import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  onValue,
  off,
} from "firebase/database";
import { dataRef } from "../../../firebase";
import "./page.scss";
import adminImg from "../../../img/admin.jpg";
import tempicon from "../../../img/temp-icon.svg";
import humiicon from "../../../img/humi-icon.svg";
import sunicon from "../../../img/sun-icon.svg";
import backicon from "../../../img/back-icon.svg";
import pauseicon from "../../../img/pause-icon.svg";
import playicon from "../../../img/play-icon.svg";
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
  const [replay3Status, setReplay3Status] = useState("");
  const [replay4Status, setReplay4Status] = useState("");
  const [replay5Status, setReplay5Status] = useState("");
  const [replay6Status, setReplay6Status] = useState("");
  const [auto, setAuto] = useState("");

  const [Temp, setTemp] = useState("");
  const [Temps, setTemps] = useState("");
  const [Light, setLight] = useState("");
  const [Lights, setLights] = useState("");
  const [Humis, setHumi] = useState("");


  useEffect(() => {
    const dbRef = ref(getDatabase());
    const relayRef = child(dbRef, "autoControl");
    const handleSnapshot = (snapshot) => {
      if (snapshot.exists()) {
        setAuto(snapshot.val());
      } else {
        console.log("No data available");
      }
    };
    const handleError = (error) => {
      console.error(error);
    };
    onValue(relayRef, handleSnapshot, handleError);
    return () => off(relayRef, "value", handleSnapshot);
  }, []);

  //replau
 useEffect(() => {
    const dbRef = ref(getDatabase());
    const relayRef = child(dbRef, "Relay");
    const handleSnapshot = (snapshot) => {
      if (snapshot.exists()) {
        setReplay1Status(snapshot.val().relay1.status);
        setReplay2Status(snapshot.val().relay2.status);
        setReplay3Status(snapshot.val().relay3.status);
        setReplay4Status(snapshot.val().relay4.status);
        setReplay5Status(snapshot.val().relay5.status);
        setReplay6Status(snapshot.val().relay6.status);
      } else {
        console.log("No data available");
      }
    };
    const handleError = (error) => {
      console.error(error);
    };
    onValue(relayRef, handleSnapshot, handleError);
    return () => off(relayRef, "value", handleSnapshot);
  }, []); 

  //dht
  useEffect(() => {
    setInterval(() => {
      get(child(dbRef, `DHT`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setTemp(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1000);
  }, []);
  //BH1750

  useEffect(() => {
    setInterval(() => {
      get(child(dbRef, `BH1750`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setLight(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1000);
  }, []);

  //hiso
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

  const toggleAuto = () => {
    const newStatus = auto === 1 ? 0 : 1;
    set(child(dbRef, "autoControl"), newStatus)
      .then(() => {
        setAuto(newStatus);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleReplay1 = () => {
    const newStatus = replay1Status === 1 ? 0 : 1;
    set(child(dbRef, "Relay/relay1/status"), newStatus)
      .then(() => {
        setReplay1Status(newStatus);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleReplay2 = () => {
    const newStatus = replay2Status === 1 ? 0 : 1;
    set(child(dbRef, "Relay/relay2/status"), newStatus)
      .then(() => setReplay2Status(newStatus))
      .catch((error) => {
        console.error(error);
      });
  };
  const toggleReplay3 = () => {
    const newStatus = replay3Status === 1 ? 0 : 1;
    set(child(dbRef, "Relay/relay3/status"), newStatus)
      .then(() => setReplay3Status(newStatus))
      .catch((error) => {
        console.error(error);
      });
  };
  const toggleReplay4 = () => {
    const newStatus = replay4Status === 1 ? 0 : 1;
    console.log(newStatus);
    set(child(dbRef, "Relay/relay4/status"), newStatus)
      .then(() => setReplay4Status(newStatus))
      .catch((error) => {
        console.error(error);
      });
  };
  const toggleReplay5 = () => {
    const newStatus = replay5Status === 1 ? 0 : 1;
    set(child(dbRef, "Relay/relay5/status"), newStatus)
      .then(() => setReplay5Status(newStatus))
      .catch((error) => {
        console.error(error);
      });
  };
  const toggleReplay6 = () => {
    const newStatus = replay6Status === 1 ? 0 : 1;
    set(child(dbRef, "Relay/relay6/status"), newStatus)
      .then(() => setReplay6Status(newStatus))
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleClass = (buttonId) => {
    const button = document.getElementById(buttonId);
    button.classList.toggle("actives");
  };


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
                <h2 className="tempcolor">{Temp.Temperature}</h2>
                <p>Nhiệt Độ</p>
              </div>
              <img src={tempicon} />
            </div>
            <div className="cards">
              <div className="card">
                <h2 className="humicolor">{Temp.Humidity}</h2>
                <p>Độ Ẩm</p>
              </div>
              <img src={humiicon} />
            </div>

            <div className="cards ">
              <div className="card">
                <h2 className="lightcolor">{Light.Light}</h2>
                <p>Ánh sáng</p>
              </div>
              <img src={sunicon} />
            </div>
            <div className="">
              <iframe
                src="http://192.168.1.15:5000/video_feed"
                width="260"
                height="150"
              ></iframe>
            </div>
          </div>
          <div className="sumary__statistical row">
            <div className="sumary__statistical-chart col-7">
              <ResponsiveContainer width="90%" height={400}>
                <LineChart data={tvData}>
                  <CartesianGrid strokeDasharray="3 10" />
                  <XAxis />
                  <YAxis domain={[35, 40]} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="temperature"
                    stroke="#f71505"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="humidity"
                    stroke="#0511f7"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="light"
                    stroke="#FFD700"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="sumary__statistical-button col-4">
              <div className="music-bar">
                <button type="">
                  <img src={backicon} />
                </button>
                <button
                  id="button7"
                  className={replay6Status === 0 ? "activebtn" : ""}

                  onClick={() => {
        
                    toggleReplay6();
                  }}

                >
                  <img src={pauseicon} />
                </button>
                <button
                  id="button8"
                  className={replay6Status === 1 ? "activebtn" : ""}

                  onClick={() => {
                    toggleReplay6();
                  }}
                >
                  <img src={playicon} />
                </button>
                <button type="">
                  <img src={backicon} />
                </button>
              </div>

              <div className="buttons">
                <p>
                  Ấn để {replay1Status === 1 ? "tắt" : "bật"} bóng đèn trong{" "}
                </p>
                <button
                  id="light"
                  onClick={() => {
                    toggleClass("light");
                    toggleReplay1();
                  }}
                  className={replay1Status === 1 ? "actives" : ""}
                >
                  <div className="circal"></div>
                </button>
              </div>

              <div className="buttons">
                <p>
                  Ấn để {replay2Status === 1 ? "tắt" : "bật"} bóng đèn ngoài{" "}
                </p>
                <button
                  id="fan"
                  onClick={() => {
                    toggleReplay2();
                    toggleClass("fan");
                  }}
                  className={replay2Status === 1 ? "actives" : ""}
                >
                  <div className="circal"></div>
                </button>
              </div>
              <div className="buttons">
                <p>Ấn để {replay3Status === 1 ? "tắt" : "bật"} quạt </p>
                <button
                  id="button3"
                  onClick={() => {
                    toggleReplay3();
                    toggleClass("button3");
                  }}
                  className={replay3Status === 1 ? "actives" : ""}
                >
                  <div className="circal"></div>
                </button>
              </div>
              <div className="buttons">
                <p>Ấn để {replay4Status === 1 ? "tắt" : "bật"} bơm </p>
                <button
                  id="button4"
                  onClick={() => {
                    toggleReplay4();
                    toggleClass("button4");
                  }}
                  className={replay4Status === 1 ? "actives" : ""}
                >
                  <div className="circal"></div>
                </button>
              </div>
              <div className="buttons">
                <p>Ấn để {replay5Status === 1 ? "tắt" : "bật"} phun sương </p>
                <button
                  id="button5"
                  onClick={() => {
                    toggleReplay5();
                    toggleClass("button5");
                  }}
                  className={replay5Status === 1 ? "actives" : ""}
                >
                  <div className="circal"></div>
                </button>
              </div>

              <div className="buttons">
                <p>Ấn để {auto === 1 ? "tắt" : "bật"} chế độ tự động </p>
                <button
                  id="button9"
                  onClick={() => {
                    toggleClass("button9");
                    toggleAuto();
                  }}
                  className={auto === 1 ? "actives" : ""}
                >
                  <div className="circals"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
