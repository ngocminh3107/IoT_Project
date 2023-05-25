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
  apiKey: "AIzaSyCQLPzYHHfPhfb_9Xlu9C3z9UTET_lvhv0",
  authDomain: "chimyen3-55934.firebaseapp.com",
  databaseURL: "https://chimyen3-55934-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chimyen3-55934",
  storageBucket: "chimyen3-55934.appspot.com",
  messagingSenderId: "235629842956",
  appId: "1:235629842956:web:76a0df3f11c3ed7b511429",
  measurementId: "G-25N6X1JH2Z"
};

// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);
export const dataRef = firebase.database
export const storage = firebase.storage();
export default firebase
