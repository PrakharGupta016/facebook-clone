import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "./firebase";

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
