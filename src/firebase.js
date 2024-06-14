import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDgqRO2jY_oWSS7Aj1N0IPfaFCMKEsLxks",
  authDomain: "chat-app-30543.firebaseapp.com",
  projectId: "chat-app-30543",
  storageBucket: "chat-app-30543.appspot.com",
  messagingSenderId: "15975242713",
  appId: "1:15975242713:web:02bc25eff21b67476717c8",
  measurementId: "G-BE4Q3NPX1H"
};


export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);