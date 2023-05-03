// Import các hàm bạn cần từ các SDK bạn cần
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
// TODO: Thêm SDK cho các sản phẩm Firebase mà bạn muốn sử dụng
// https://firebase.google.com/docs/web/setup#available-libraries

// Cấu hình Firebase cho ứng dụng web của bạn
// Đối với Firebase JS SDK v7.20.0 và mới hơn, measurementId là tùy chọn
const firebaseConfig = {
  apiKey: "AIzaSyDF_MFCHt_pxyLu0l2K5VM62nqsB_RGniY",
  authDomain: "chimyen-fb711.firebaseapp.com",
  databaseURL: "https://chimyen-fb711-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chimyen-fb711",
  storageBucket: "chimyen-fb711.appspot.com",
  messagingSenderId: "748175740205",
  appId: "1:748175740205:web:04359546d93133c66257a4",
  measurementId: "G-BQQ98ZGC76"
};

// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);
export const dataRef = firebase.database
export default firebase
