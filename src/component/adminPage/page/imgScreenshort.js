import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, child, get, set } from "firebase/database";
import "./page.scss";
import adminImg from "../../../img/admin.jpg";
import { storage } from "../../../firebase";

// Get all the images from Storage

export default function ImgScreenshort() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      let result = await storage.ref().child("").listAll();
      let urlPromises = result.items.map(async (imageRef) => {
        const url = await imageRef.getDownloadURL();
        const metadata = await imageRef.getMetadata();
        return { url, timeCreated: metadata.timeCreated };
      });

      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      setFiles(urls);
    };
    loadImages();
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

      <div className="page__screenshort">
        <div className="header">
        <div>
            <h2>
              <b>ImgScreenshort Page</b>
            </h2>
          </div>
          <div className="header__login">
            <p>Hi, BacHoang</p>
            <div className="header__login-img">
              <img src={adminImg} />
            </div>
          </div>
        </div>
        <div className="categoryImg">
          <div className="image row">
            {files &&
              files.map((file, index) => (
                <div key={index} className="col-5 image-box">
                  <img  src={file.url} alt={`Image ${index}`} />
                  <p>{file.timeCreated.toString()}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
