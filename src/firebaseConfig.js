import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAY1Obgm9LUGbFzQry3ft4kJDP2YnRe8ZA",
    authDomain: "proj-inicial.firebaseapp.com",
    projectId: "proj-inicial",
    storageBucket: "proj-inicial.appspot.com",
    messagingSenderId: "527264393690",
    appId: "1:527264393690:web:2fa6af540aab98d744f8e3"
  };

  const app = initializeApp(firebaseConfig);

export { app };