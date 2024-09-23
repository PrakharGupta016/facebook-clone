import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithPopup
} from "firebase/auth";
import {auth} from "./firebase";
const fbAuth = new FacebookAuthProvider();

export const createUserWithEmailAndPasswordHelper = async (
  email: string,
  password: string
) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export const signInUserWithEmailAndPasswordHelper = (
  email: string,
  password: string
) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signInWithFb = async ()=>{
    return signInWithPopup(auth,fbAuth);
}