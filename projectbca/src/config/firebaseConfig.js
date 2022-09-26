import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyArOzCacgjiD_IwaHjS-yx6URTociKSsCY",
  authDomain: "fscxperts.firebaseapp.com",
  databaseURL: "https://fscxperts-default-rtdb.firebaseio.com",
  projectId: "fscxperts",
  storageBucket: "fscxperts.appspot.com",
  messagingSenderId: "862910247145",
  appId: "1:862910247145:web:afbd390b22e824826a4078",
  measurementId: "G-40VB7DX4GK",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
