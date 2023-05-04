import React from "react";
import "./home.scss";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <header>
        <nav className="navigation">
          <div className="menu-icon"></div>
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
          <h2>
              ÁP DỤNG CÔNG NGHỆ IOT NUÔI YẾN
          </h2>
          <p>
          <Link to="/login"><button>
                Login
              </button></Link> đê tìm hiểu thêm
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
          Nuôi chim yến là một ngành công nghiệp thương mại ngày càng quan trọng
          của đất nước ta kể từ khi xuất hiện vào đầu những năm 2000. Tuy nhiên,
          việc sử dụng lao động thủ công đã giới hạn việc khai thác đầy đủ tiềm
          năng của sản phẩm. Với sự tiến bộ của công nghệ ngày nay, triển khai
          một hệ thống IoT có thể cải thiện chất lượng sản phẩm và giảm thiểu
          chi phí. Do đó, chủ đề phát triển hệ thống giám sát và điều khiển từ
          xa cho nhà nuôi chim yến được nhóm chúng em chọn. Nhà đầu tư có thể
          giám sát và điều khiển hệ thống qua trang web hoặc ứng dụng di động.
          Việc sử dụng các thiết bị và cảm biến IoT như Raspberry Pi 4, DHT11,
          ... cho phép hệ thống cung cấp khả năng giám sát thời gian thực cho
          các thông số như ánh sáng, nhiệt độ và độ ẩm, giúp người dùng duy trì
          tiêu chuẩn kỹ thuật phù hợp với điều kiện sống của chim yến. Ngoài ra,
          hệ thống còn được thiết kế để gửi thông báo qua SMS, đảm bảo người
          dùng có thể được thông báo ngay cả khi họ không có mặt ở gần hệ thống.
          Hơn nữa, hệ thống được trang bị một camera để phát hiện sự hiện diện
          của người xung quanh nhà chim. Tính năng này giảm thiểu sự ảnh hưởng
          đến chim và mang lại sự yên tâm cho nhà đầu tư.
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
                  <h5 className="card-title">Bac</h5>
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
                  <h5 className="card-title">hung</h5>
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
        <div className="mt-190 footer">
          <div className="footer-wapper fl-r j-sb mb-130 fz22">
           x
          </div>
          <div className="footer-information row">
            <h1 className="col-6 title">PROJECT NEWS TO YOUR INBOX</h1>
            <form action="" className="col-6 form">
              <div action="" className="control">
                <input type="text" id="username" name="username" />
              </div>

              <button className="">SIGN UP</button>
            </form>
          </div>
          <div className="footer-nav row">
            <div className="col-3 ">
              <h3>IOT PROJECT</h3>
            </div>
            <div className="col-3 mt-4">
              <nav className="fz-16 fw-400">
                <p>
                  <a>IoT</a>
                </p>
                <p>
                  <a>Rassberry</a>
                </p>
                <p>
                  <a>Architecture</a>
                </p>
              </nav>
            </div>
            <div className="col-3 mt-4">
              <nav className="fz-16 fw-400">
                <p>
                  <a>Temp</a>
                </p>
                <p>
                  <a>Light</a>
                </p>
                <p>
                  <a>Humiditi</a>
                </p>
              </nav>
            </div>
            <div className="col-3 mt-4">
              <nav className="fz-16 fw-400">
                <p>
                  <a>Relay</a>
                </p>
                <p>
                  <a>DHT_11</a>
                </p>
                <p>
                  <a>Moudule</a>
                </p>
              </nav>
            </div>
          </div>

          <div className="footer-infor j-sb1 mt-40 mb-40">
            <div className="company">
             
            </div>
            <div className="socialmedia"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
