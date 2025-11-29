import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
const googleProvider =new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // for the register user
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // for the signIn user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // for the google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = {
    registerUser,
    signInUser,
    googleLogin,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
