const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set } = require("firebase/database");
const jsonData = require("./db.json");

// Firebase Configuration
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

// Upload Data
const uploadData = async () => {
  const dbRef = ref(database, "resProj-api");

  try {
    await set(dbRef, jsonData);
    console.log("Data uploaded successfully!");
  } catch (error) {
    console.error("Error uploading data:", error);
  }
};

uploadData();
