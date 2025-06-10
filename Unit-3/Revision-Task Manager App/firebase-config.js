
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyDz6ZrQMh5-eCLMf7SW1keRr-XWeGGnS0k",
    authDomain: "learn-bd69c.firebaseapp.com",
    databaseURL: "https://learn-bd69c-default-rtdb.firebaseio.com",
    projectId: "learn-bd69c",
    storageBucket: "learn-bd69c.appspot.com",
    messagingSenderId: "904313910378",
    appId: "1:904313910378:web:d28ce8856d8c737e470613"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);