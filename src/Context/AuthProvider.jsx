import React, { useEffect, useState } from "react";
import { AuthContex } from "./AuthContex";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ১. প্রোফাইল আপডেট করার নতুন ফাংশন (এটি Edit Profile এর জন্য লাগবে)
  const updateUserProfile = async (name, photo) => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });

      // প্রোফাইল আপডেট হওয়ার পর স্টেট আপডেট করা যাতে রিফ্রেশ ছাড়াই নাম পরিবর্তন দেখা যায়
      setUser({ ...auth.currentUser, displayName: name, photoURL: photo });
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (email, password, name, photoURL) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(result.user, {
        displayName: name,
        photoURL: photoURL,
      });

      setUser({
        ...result.user,
        displayName: name,
        photoURL: photoURL,
      });

      return result;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    registerUser,
    signInUser,
    googleSignIn,
    logOut,
    updateUserProfile, // ২. এটি এক্সপোর্ট করতে ভুলবেন না
  };

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
