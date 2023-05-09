"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.storage = exports.dataRef = void 0;

var _app = _interopRequireDefault(require("firebase/compat/app"));

require("firebase/compat/auth");

require("firebase/compat/firestore");

require("firebase/compat/storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import các hàm bạn cần từ các SDK bạn cần
// TODO: Thêm SDK cho các sản phẩm Firebase mà bạn muốn sử dụng
// https://firebase.google.com/docs/web/setup#available-libraries
// Cấu hình Firebase cho ứng dụng web của bạn
// Đối với Firebase JS SDK v7.20.0 và mới hơn, measurementId là tùy chọn
var firebaseConfig = {
  apiKey: "AIzaSyCmFsd4_kEyQ_ksVgU6M51g3Cx5pilqgK4",
  authDomain: "chimyen2-933cb.firebaseapp.com",
  databaseURL: "https://chimyen2-933cb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chimyen2-933cb",
  storageBucket: "chimyen2-933cb.appspot.com",
  messagingSenderId: "844465133033",
  appId: "1:844465133033:web:b0c339044defab769c6778",
  measurementId: "G-JHZ0P574KY"
}; // Khởi tạo Firebase

_app["default"].initializeApp(firebaseConfig);

var dataRef = _app["default"].database;
exports.dataRef = dataRef;

var storage = _app["default"].storage();

exports.storage = storage;
var _default = _app["default"];
exports["default"] = _default;