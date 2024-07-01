// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBuddMZ0LWr-FsIuWy7sq1rRfLnyc2uGs",
  authDomain: "shoutouts-102e7.firebaseapp.com",
  projectId: "shoutouts-102e7",
  storageBucket: "shoutouts-102e7.appspot.com",
  messagingSenderId: "159529286660",
  appId: "1:159529286660:web:13758a83c8c7e796c2c951",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}

export function signOutOfGoogle(): void {
  auth.signOut();
}

export const storage = getStorage(app);
