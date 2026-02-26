// import React, { useEffect, useState } from "react";
// import { AuthContex } from "./AuthContex";
// import {
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../firebase/firebase.init";

// const AuthProvider = ({ children }) => {
//   const googleProvider = new GoogleAuthProvider(); 

//   const [user,setUser]= useState(null)
//   const [loading,setLoading]=useState(true)


//   const registerUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
    
//   };

//   const signInUser = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const googleSignIn = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider); 
//   };

//   const logOut = ()=>{
//     setLoading(true)
//     return signOut(auth)
//   }

//   useEffect(()=>{
//     const UnSubscribe = onAuthStateChanged(auth,(curentUser)=>{
//     setUser(curentUser)
//     setLoading(false)
//     })
//     return()=>{
//         UnSubscribe()
//     }
//   },[])

//   const authInfo = {
//     user,
//     loading,
//     registerUser,
//     signInUser,
//     googleSignIn,
//     logOut
//   };

//   return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
// };

// export default AuthProvider;



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

  // ✅ Register User with Name + Photo
  const registerUser = async (email, password, name, photoURL) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update Profile
      await updateProfile(result.user, {
        displayName: name,
        photoURL: photoURL,
      });

      // Update state manually
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

  // ✅ Email Login
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ✅ Google Login
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // ✅ Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // ✅ Observer
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
  };

  return (
    <AuthContex.Provider value={authInfo}>
      {children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;