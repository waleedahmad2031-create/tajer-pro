// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjPfjyCMLLBrlazJKsh7CWgxh34CHoqdU",
  authDomain: "tajer-pro-59fb4.firebaseapp.com",
  projectId: "tajer-pro-59fb4",
  storageBucket: "tajer-pro-59fb4.firebasestorage.app",
  messagingSenderId: "181727181707",
  appId: "1:181727181707:web:69d0297f5bddbdfe9acd8e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
