import React from "react";
import "./home.scss"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <header>
        <nav className="navigation">
          <div className="menu-icon">
          </div>
          <ul className="menu-items">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div>
          <p>
            Please <Link to="/login">login</Link> to continue.
          </p>
        </div>
      </section>

      <section className="featured-articles">
        <h2>Featured Articles</h2>
        <div className="article-list">
          <div className="article">
            {/* article image */}
            <h3>
              The Future of Smart Homes: How IoT is Revolutionizing the Way We
              Live
            </h3>
          </div>
          <div className="article">
            {/* article image */}
            <h3>
              5G and IoT: The Perfect Match for Next-Generation Connectivity
            </h3>
          </div>
          <div className="article">
            {/* article image */}
            <h3>
              The Rise of Industrial IoT: How It's Changing the Face of
              Manufacturing
            </h3>
          </div>
        </div>
      </section>

      <section className="categories">
        <h2>Categories</h2>
        <div className="category-list">
          <div className="category">
            {/* category icon */}
            <h3>Smart Home</h3>
          </div>
          <div className="category">
            {/* category icon */}
            <h3>Wearables</h3>
          </div>
          <div className="category">
            {/* category icon */}
            <h3>Industrial IoT</h3>
          </div>
          <div className="category">
            {/* category icon */}
            <h3>Healthcare</h3>
          </div>
          <div className="category">
            {/* category icon */}
            <h3>Agriculture</h3>
          </div>
          <div className="category">
            {/* category icon */}
            <h3>Transportation</h3>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>
          The Internet of Things (IoT) is a rapidly growing technology that is
          expected to have a significant impact on various industries, including
          manufacturing, healthcare, transportation, and agriculture. IoT
          devices can collect and transmit vast amounts of data, which can be
          analyzed to gain insights, optimize processes, and improve efficiency.
          Some of the key components of an IoT system include sensors, which can
          detect changes in the physical environment, actuators, which can
          control physical devices, and connectivity, which enables devices to
          communicate with each other and with the internet. IoT devices can be
          controlled remotely, allowing for real-time monitoring and control of
          various processes. There are many potential benefits of IoT, including
          improved efficiency, reduced costs, enhanced safety, and increased
          productivity. For example, IoT can be used to monitor the condition of
          equipment in real-time, allowing for predictive maintenance and
          reducing downtime. IoT can also be used to optimize supply chains,
          improve energy efficiency, and enhance the customer experience.
        </p>
      </section>

      <section className="newsletter">
        <h2>Sign Up for Our Newsletter</h2>
        <div className="container">
          <div className="row list-card">
            <div className="col-md-3">
              <div className="card">
                <img
                  src="path/to/iot-image-1.jpg"
                  className="card-img-top"
                  alt="IoT 1"
                />
                <div className="card-body">
                  <h5 className="card-title">IoT Device 1</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec hendrerit nisi sit amet justo malesuada, ac laoreet mi
                    porttitor.
                  </p>
                </div>
              </div>
            </div>
            {/* Repeat the same structure for the remaining cards */}
            <div className="col-md-3">
              <div className="card">
                <img
                  src="path/to/iot-image-2.jpg"
                  className="card-img-top"
                  alt="IoT 2"
                />
                <div className="card-body">
                  <h5 className="card-title">IoT Device 2</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec hendrerit nisi sit amet justo malesuada, ac laoreet mi
                    porttitor.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  src="path/to/iot-image-3.jpg"
                  className="card-img-top"
                  alt="IoT 3"
                />
                <div className="card-body">
                  <h5 className="card-title">IoT Device 3</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec hendrerit nisi sit amet justo malesuada, ac laoreet mi
                    porttitor.
                  </p>
                </div>
              </div>
            </div>
            {/* Repeat the same structure for the remaining cards */}
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-logo">{/* website logo */}</div>
          <div className="footer-menu">
            <h3>Menu</h3>
            <ul>
              <li> Home </li>
              <li> About Us </li>
              <li> Categories </li>
              <li> Contact Us </li>
            </ul>
          </div>
          <div className="footer-categories">
            <h3>Categories</h3>
            <ul>
              <li> Smart Home </li>
              <li> Wearables </li>
              <li> Industrial IoT </li>
              <li> Healthcare </li>
              <li> Agriculture </li>
              <li> Transportation </li>
            </ul>
          </div>
          <div className="footer-social-media">
            <h3>Connect With Us</h3>
            <ul>
              <li>
             
              </li>
              <li> </li>
              <li> </li>
              <li> </li>
            </ul>
          </div>
          <div className="footer-newsletter">
            <h3>Subscribe to Our Newsletter</h3>
            {/* newsletter sign-up form */}
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 IoT World. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
