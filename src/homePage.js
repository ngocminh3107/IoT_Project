import React from "react";
import "./home.scss";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import av1 from "./img/avatar1.jpg"
import av2 from "./img/avatar2.jpg"
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
          <h2 style={{fontSize: 55}}>
          <u>ỨNG DỤNG IOT</u> THEO DÕI NHÀ NUÔI CHIM YẾN TRONG THỜI ĐẠI CÁCH MẠNG 4.0
          </h2>
          <p>
          <Link to="/login"><button>
                Login
              </button></Link> 
          </p>
        </div>
      </section>

      <section className="featured-articles">
        <h2><b>Featured Articles</b></h2>
        <div className="article-list">
          <div className="article">
          <img src="https://www.circuitschools.com/wp-content/uploads/2022/01/What-is-ESP32-how-it-works-and-what-you-can-do-with-ESP32.webp" alt="Article Image 1" width={500} height={300} />
            <h3>
            <a href="https://www.circuitschools.com/what-is-esp32-how-it-works-and-what-you-can-do-with-esp32/" target="_blank" rel="noopener norefresher">What is ESP32, how it works and what you can do with it?<p>ESP32 là gì, cơ chế hoạt động và ứng dụng thực tiễn?</p></a>
            </h3>
          </div>
          <div className="article">
          <img src="http://www.en.trithuckhoahoc.vn/DesktopModules/CMS/HinhDaiDien2/0/2021_06_15-10_50_39dtphong.jpg" alt="Article Image 2" width={500} height={300} />
            <h3>
            <a href="http://www.en.trithuckhoahoc.vn/?tabid=65&NDID=16863&keyword=The-model-of-raising-swiftlets-applying-IoT" target="_blank" rel="noopener norefresher">The model of raising swiftlets applying IoT<p>Mô hình nuôi chim yến áp dụng công nghệ IoT</p></a>
            </h3>
          </div>
          <div className="article">
          <img src="https://media.licdn.com/dms/image/D5612AQEAwXy0Om1_rQ/article-cover_image-shrink_720_1280/0/1677871412671?e=2147483647&v=beta&t=6GhrjfXdBPoP1I9lcJOtlPPjC1T8BxDRkngMctlIYDU" alt="Article Image 3" width={500} height={300} />
            <h3>
            <a href="https://www.linkedin.com/pulse/future-iot-emerging-trends-applications-hireotter#:~:text=According%20to%20a%20report%20by,monitor%20crops%20and%20improve%20yield." target="_blank" rel="noopener norefresher">The Future of IoT: Emerging Trends and Applications<p>Tương lai của IoT: Xu hướng hội nhập và Ứng dụng thực tiễn</p></a>
            </h3>
          </div>
        </div>
      </section>

      <section className="categories">
        <h2><b>Categories</b></h2>
        <div className="category-list">
          <div className="category">
          <img src="data:image/png;base64,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" alt="Category Image 1" width={250} height={150} style={{ borderRadius: "17px" }} />
            <h3>Arduino Programming</h3>
          </div>
          <div className="category">
          <img src="https://camo.githubusercontent.com/86a49c41e4ebe5248fe388e37090989f2382656d50a6d5ff6035742a28a8c020/68747470733a2f2f66697265626173652e676f6f676c652e636f6d2f646f776e6c6f6164732f6272616e642d67756964656c696e65732f504e472f6c6f676f2d6275696c745f626c61636b2e706e67" alt="Category Image 2" width={250} height={150} style={{ borderRadius: "17px" }} />
            <h3>Google Firebase</h3>
          </div>
          <div className="category">
          <img src="https://camo.githubusercontent.com/89c1f859b22b80caa4751dfa0b304cf5b0a0170a8f1d7025af816be08e5f917e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d52656163742d3030303030303f7374796c653d666c6174266c6f676f3d5265616374266c6f676f436f6c6f723d363144414642" alt="Category Image 3" width={250} height={150} style={{ borderRadius: "17px" }}/>
            <h3>React Native</h3>
          </div>
          <div className="category">
          <img src="https://camo.githubusercontent.com/3fd58db04ae96181db91ff9cee08bca4ca6db9db8dd38f2063f26781eaeb67e4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d48544d4c352d3030303030303f7374796c653d666c6174266c6f676f3d68746d6c35" alt="Category Image 4" width={250} height={150} style={{ borderRadius: "17px" }} />
            <h3>HTML</h3>
          </div>
      
        </div>
      </section>

      <section className="about">
        <h2><b>Giới Thiệu Đề Tài</b></h2>
        <p>
          Nuôi chim yến là một ngành công nghiệp thương mại ngày càng quan trọng
          của đất nước ta kể từ khi xuất hiện vào đầu những năm 2000. Tuy nhiên,
          việc sử dụng lao động thủ công đã giới hạn việc khai thác đầy đủ tiềm
          năng của sản phẩm. Với sự tiến bộ của công nghệ ngày nay, triển khai
          một hệ thống IoT có thể cải thiện chất lượng sản phẩm và giảm thiểu
          chi phí. Do đó, chủ đề phát triển hệ thống giám sát và điều khiển từ
          xa cho nhà nuôi chim yến được nhóm chúng em chọn. Nhà đầu tư có thể
          giám sát và điều khiển hệ thống qua trang web hoặc ứng dụng di động.
          Việc sử dụng các thiết bị và cảm biến IoT như ESP32, DHT11, BH1750,
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
        <h2><b>Thành viên dự án</b></h2>
        <div className="container">
          <div className="row list-card">
            <div className="col-md-3">
              <div className="card">
                <img
                  src={av1}
                  className="card-img-top"
                  alt="avatar 1"
                />
                <div className="card-body">
                  <h5 className="card-title"><b>Phan Duy Hưng</b></h5>
                  <p className="card-text">
                    <br></br><b>Chuyên ngành:</b> <i>Công nghệ thông tin</i> <br />
                    <b>Mã số sinh viên:</b> <i>19527441</i> <br />
                    <b>Email:</b> <i>hunghphan22@gmail.com</i>
                  </p>
                </div>
              </div>
            </div>
            {/* Repeat the same structure for the remaining cards */}
            <div className="col-md-3">
              <div className="card">
                <img
                 src={av2}

                  className="card-img-top"
                  alt="avatar 2"
                />
                <div className="card-body">
                  <h5 className="card-title"><b>Trương Hoàng Bắc</b></h5>
                  <p className="card-text">
                  <br></br><b>Chuyên ngành:</b> <i>Công nghệ thông tin</i> <br />
                  <b>Mã số sinh viên:</b> <i>19527441</i> <br />
                  <b>Email:</b> <i>bachoang0802@gmail.com</i>
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
