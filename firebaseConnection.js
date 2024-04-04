import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAEkHY9DiAjEPcr03C_4ew5fak6I3ZHtJ0",
  authDomain: "focus-app-6b0ec.firebaseapp.com",
  projectId: "focus-app-6b0ec",
  storageBucket: "focus-app-6b0ec.appspot.com",
  messagingSenderId: "309043528447",
  appId: "1:309043528447:web:b6d870e3431c3b7bd602ca"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});


export { db, auth };