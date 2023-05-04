import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, child, get, set } from "firebase/database";
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
    get(child(dbRef, `autoControl`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setAuto(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //replau
  useEffect(() => {
    get(child(dbRef, `Relay`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setReplay1Status(snapshot.val().relay1);
          setReplay2Status(snapshot.val().relay2);
          setReplay3Status(snapshot.val().relay3);
          setReplay4Status(snapshot.val().relay4);
          setReplay5Status(snapshot.val().relay5);
          setReplay6Status(snapshot.val().relay6);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //dht
  useEffect(() => {
    get(child(dbRef, `DHT`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setInterval(() => {
            setTemp(snapshot.val());
          }, 1000);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
    const newStatus = auto === "1" ? "0" : "1";
    set(child(dbRef, "autoControl"), newStatus)
      .then(() => {
        setAuto(newStatus);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleReplay1 = () => {
    const newStatus = replay1Status === "1" ? "0" : "1";
    set(child(dbRef, "Relay/relay1/status"), newStatus)
      .then(() => {
        setReplay1Status(newStatus);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleReplay2 = () => {
    const newStatus = replay2Status === "1" ? "0" : "1";
    set(child(dbRef, "Relay/relay2/status"), newStatus)
      .then(() => setReplay2Status(newStatus))
      .catch((error) => {
        console.error(error);
      });
  };
  const toggleReplay3 = () => {
    const newStatus = replay3Status === "1" ? "0" : "1";
    set(child(dbRef, "Relay/relay3/status"), newStatus)
      .then(() => setReplay3Status(newStatus))
      .catch((error) => {
        console.error(error);
      });
  };
  const toggleReplay4 = () => {
    const newStatus = replay4Status === "1" ? "0" : "1";
    console.log(newStatus)
    set(child(dbRef, "Relay/relay4/status"), newStatus)
      .then(() => setReplay4Status(newStatus))
      .catch((error) => {
        console.error(error);
      });
  };
  const toggleReplay5 = () => {
    const newStatus = replay5Status === "1" ? "0" : "1";
    set(child(dbRef, "Relay/relay5/status"), newStatus)
      .then(() => setReplay5Status(newStatus))
      .catch((error) => {
        console.error(error);
      });
  };
  const toggleReplay6 = () => {
    const newStatus = replay6Status === "1" ? "0" : "1";
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
  const toggleClass8 = () => {
    const button7 = document.getElementById("button8");
    const button8 = document.getElementById("button7");
    button7.classList.add("activebtn");
    button8.classList.remove("activebtn");
  };
  const toggleClass7 = () => {
    const button7 = document.getElementById("button8");
    const button8 = document.getElementById("button7");
    button8.classList.add("activebtn");
    button7.classList.remove("activebtn");
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
                <h2>{Temp.Temperature}</h2>
                <p>Nhiệt Độ</p>
              </div>
              <img src={tempicon} />
            </div>
            <div className="cards">
              <div className="card">
                <h2>{Temp.Humidity}</h2>
                <p>Độ Ẩm</p>
              </div>
              <img src={humiicon} />
            </div>

            <div className="cards ">
              <div className="card">
                <h2>{Light.Light}</h2>
                <p>Ánh sáng</p>
              </div>
              <img src={sunicon} />
            </div>
            <div className="cards"></div>
          </div>
          <div className="sumary__statistical row">
            <div className="sumary__statistical-chart col-7">
              <ResponsiveContainer width="90%" height={400}>
                <LineChart data={tvData}>
                  <CartesianGrid strokeDasharray="3 10" />
                  <XAxis />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="temperature"
                    stroke="#f71505"
                  />
                  <Line type="monotone" dataKey="humidity" stroke="#0511f7" />
                  <Line type="monotone" dataKey="light" stroke="#15ff00" />
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
                  className="activebtn"
                  onClick={() => {
                    toggleClass7();
                    toggleReplay6();
                  }}
                >
                  <img src={pauseicon} />
                </button>
                <button
                  id="button8"
                  onClick={() => {
                    toggleClass8();
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
                  Ấn để {replay1Status === "1" ? "tắt" : "bật"} bóng đèn trong{" "}
                </p>
                <button
                  id="light"
                  onClick={() => {
                    toggleClass("light");
                    toggleReplay1();
                  }}
                >
                  <div className="circal"></div>
                </button>
              </div>
              <div className="buttons">
                <p>
                  Ấn để {replay2Status === "1" ? "tắt" : "bật"} bóng đèn ngoài{" "}
                </p>
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
              <div className="buttons">
                <p>Ấn để {replay3Status === "1" ? "tắt" : "bật"} quạt </p>
                <button
                  id="button3"
                  onClick={() => {
                    toggleReplay3();
                    toggleClass("button3");
                  }}
                >
                  <div className="circal"></div>
                </button>
              </div>
              <div className="buttons">
                <p>Ấn để {replay4Status === "1" ? "tắt" : "bật"} bơm </p>
                <button
                  id="button4"
                  onClick={() => {
                    toggleReplay4();
                    toggleClass("button4");
                  }}
                  className={replay4Status === "1" ? "actives" : ""}

                >
                  <div className="circal"></div>
                </button>
              </div>
              <div className="buttons">
                <p>Ấn để {replay5Status === "1" ? "tắt" : "bật"} phun sương </p>
                <button
                  id="button5"
                  onClick={() => {
                    toggleReplay5();
                    toggleClass("button5");
                  }}

                >
                  <div className="circal"></div>
                </button>
              </div>


              <div className="buttons">
                <p>Ấn để {auto === "1" ? "tắt" : "bật"} chế độ tự động </p>
                <button
                  id="button9"
                  onClick={() => {
                    toggleClass("button9");
                    toggleAuto()
                  }}
                  className={auto === "1" ? "actives" : ""}
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
