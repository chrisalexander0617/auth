import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDP8AvVRzoXyNcQ9WYYl_paQBnaWxYyDo0",
  authDomain: "auth-5e6b6.firebaseapp.com",
  projectId: "auth-5e6b6",
  storageBucket: "auth-5e6b6.appspot.com",
  messagingSenderId: "444336496264",
  appId: "1:444336496264:web:8b6e08f899776ef631893d",
  measurementId: "G-7VWCZKTQH9"
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);