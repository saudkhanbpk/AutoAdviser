import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBjwtOB-EoD4xUQXclqPcv_wFs4z3eS08w",
    authDomain: "autoadviser-test.firebaseapp.com",
    projectId: "autoadviser-test",
    storageBucket: "autoadviser-test.appspot.com",
    messagingSenderId: "530275881267",
    appId: "1:530275881267:web:d54f4f9855d3988962ae46",
    measurementId: "G-F23PJQF4H3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);