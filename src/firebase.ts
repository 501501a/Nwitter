import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";

const firebaseConfig = {
    apiKey: "AIzaSyB0AZPuPwY3bcwbDFzxL0lE8XULn7g3Oro",
    authDomain: "nwitter-reloaded-fc1c4.firebaseapp.com",
    projectId: "nwitter-reloaded-fc1c4",
    storageBucket: "nwitter-reloaded-fc1c4.firebasestorage.app",
    messagingSenderId: "628924523849",
    appId: "1:628924523849:web:305aba1c531c7999696698"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);