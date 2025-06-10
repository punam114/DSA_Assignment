/** @format */

import { auth, db } from "../firebase-config.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

import {
  doc,
  getDoc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  let loginBtn = document.getElementById("login-btn");
  let signupBtn = document.getElementById("signup-btn");
  let logoutBtn = document.getElementById("logout-btn");

  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
      let email = document.getElementById("login-email").value;
      let password = document.getElementById("login-password").value;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        // Redirect the user to dashboard page
        window.open("dashboard.html", "_blank");
      } catch (error) {
        document.getElementById("login-message").innerText = error.message;
      }
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener("click", async () => {
      let email = document.getElementById("signup-email").value;
      let password = document.getElementById("signup-password").value;
      let role = document.getElementById("role").value;
      try {
        let userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
         await setDoc(doc(db, "users", userCredentials.user.uid), {
          email,
          role,
        });
        window.location.href = "index.html";
      } catch (error) {
        document.getElementById("signup-message").innerText = error.message;
      }
    });
  }

  if(logoutBtn){
    logoutBtn.addEventListener("click",async ()=>{
        await signOut(auth);
        window.location.href = "index.html"
    })
  }
});
