// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "<API-KEY>",
    authDomain: "aidan-test-90c54.firebaseapp.com",
    projectId: "aidan-test-90c54",
    storageBucket: "aidan-test-90c54.appspot.com",
    messagingSenderId: "507679855319",
    appId: "1:507679855319:web:4900fa1613df4f3e88d692",
    measurementId: "G-R2HW9Z0LR6"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);


