import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import jsonData from './db.json'; // Adjust the path as per your project structure

const firebaseConfig = {
    apiKey: "AIzaSyBr8EST6IuaHl6JHAblKrMU2XRI88d8KbQ",
    authDomain: "resproj-app.firebaseapp.com",
    databaseURL: "https://resproj-app-default-rtdb.firebaseio.com",
    projectId: "resproj-app",
    storageBucket: "resproj-app.firebasestorage.app",
    messagingSenderId: "425394590949",
    appId: "1:425394590949:web:212551c28fd476b2a3b00c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
