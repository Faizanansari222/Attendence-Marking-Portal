import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword   } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA7Uy-oObmrXRfRiDyyjrImHekmAhuH0DA",
  authDomain: "student-portal-d8013.firebaseapp.com",
  projectId: "student-portal-d8013",
  storageBucket: "student-portal-d8013.appspot.com",
  messagingSenderId: "280032168656",
  appId: "1:280032168656:web:c9ae3738e2a94c33936cd5",
  measurementId: "G-PTBSSM55NX"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export const register= (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
   
}
export const login = (email:any, password:any) =>{
    return signInWithEmailAndPassword(auth, email, password) 

}
