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

  const [Temps, setTemps] = useState("");
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




  const dataTemps = Object.values(Temps).reverse().slice(0, 11);
  const tv = Array.isArray(dataTemps) ? dataTemps.map(tp => ({ tp })) : [];






  




  return (
   <div>
    a
   </div>
  );
}
