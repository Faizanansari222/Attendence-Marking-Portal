import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc,   } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA7Uy-oObmrXRfRiDyyjrImHekmAhuH0DA",
  authDomain: "student-portal-d8013.firebaseapp.com",
  projectId: "student-portal-d8013",
  storageBucket: "student-portal-d8013.appspot.com",
  messagingSenderId: "280032168656",
  appId: "1:280032168656:web:c9ae3738e2a94c33936cd5",
  measurementId: "G-PTBSSM55NX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export const register = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export const login = (email: any, password: any) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const addProduct = async (product:any) => {
  const {title, brand, price, description, image} = product
  
  console.log(image.name);
  const storageRef = ref(storage, "images/" + image.name);

  await uploadBytes(storageRef, image);

const url = await getDownloadURL(storageRef)
  addDoc(collection(db, "Product"), {
    title,
    brand,
    price,
    description,
    image:url,
  });

};
