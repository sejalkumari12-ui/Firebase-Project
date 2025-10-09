import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBnne9wHfJxdcXD8kc4TVaOqtzvY4mL3GI",
  authDomain: "fir-project-38b6a.firebaseapp.com",
  projectId: "fir-project-38b6a",
  storageBucket: "fir-project-38b6a.firebasestorage.app",
  messagingSenderId: "916352868941",
  appId: "1:916352868941:web:d4cb380ea8d6ffe1243204",
  measurementId: "G-F59LXEPGM8",
  databaseURL:"https:/fir-project-38b6a-default-rtdb.firebaseio.com",
};


 export const app = initializeApp(firebaseConfig);
