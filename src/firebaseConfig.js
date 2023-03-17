// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe7khI0-bgM-nm2ly8nhL_-ekWiYjVOkc",
  authDomain: "ecommerce-for-customer.firebaseapp.com",
  databaseURL: "https://ecommerce-for-customer-default-rtdb.firebaseio.com",
  projectId: "ecommerce-for-customer",
  storageBucket: "ecommerce-for-customer.appspot.com",
  messagingSenderId: "879792533667",
  appId: "1:879792533667:web:03e28c0dbeadb0826c4f16",
  measurementId: "G-H7KC3GFX5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);