// Import các hàm bạn cần từ các SDK bạn cần
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 



import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Thêm SDK cho các sản phẩm Firebase mà bạn muốn sử dụng
// https://firebase.google.com/docs/web/setup#available-libraries

// Cấu hình Firebase cho ứng dụng web của bạn
// Đối với Firebase JS SDK v7.20.0 và mới hơn, measurementId là tùy chọn
const firebaseConfig = {
  apiKey: "AIzaSyCmFsd4_kEyQ_ksVgU6M51g3Cx5pilqgK4",
  authDomain: "chimyen2-933cb.firebaseapp.com",
  databaseURL: "https://chimyen2-933cb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chimyen2-933cb",
  storageBucket: "chimyen2-933cb.appspot.com",
  messagingSenderId: "844465133033",
  appId: "1:844465133033:web:b0c339044defab769c6778",
  measurementId: "G-JHZ0P574KY"
};

// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);
export const dataRef = firebase.database
export const storage = firebase.storage();
export default firebase
