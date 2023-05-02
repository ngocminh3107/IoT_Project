// Import các hàm bạn cần từ các SDK bạn cần
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
// TODO: Thêm SDK cho các sản phẩm Firebase mà bạn muốn sử dụng
// https://firebase.google.com/docs/web/setup#available-libraries

// Cấu hình Firebase cho ứng dụng web của bạn
// Đối với Firebase JS SDK v7.20.0 và mới hơn, measurementId là tùy chọn
const firebaseConfig = {
  apiKey: "AIzaSyBOMEXi9c5ppK5lvpoJUKNeaIQgniGGBTw",
  authDomain: "test2-e95c3.firebaseapp.com",
  databaseURL: "https://test2-e95c3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test2-e95c3",
  storageBucket: "test2-e95c3.appspot.com",
  messagingSenderId: "447598256164",
  appId: "1:447598256164:web:3a1a548663eec2cc09f8b1",
  measurementId: "G-JVXWK275MQ"
};

// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);
export const dataRef = firebase.database
export default firebase
