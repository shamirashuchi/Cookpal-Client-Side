import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);
import { GoogleAuthProvider } from "firebase/auth";
const googleAuthProvider = new GoogleAuthProvider();
import { GithubAuthProvider } from "firebase/auth";
const githubprovider = new GithubAuthProvider();
const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    
    const signInWithGoogle = () =>{
        return signInWithPopup(auth,googleAuthProvider);
    }

    const signInWithGithub = () =>{
        return signInWithPopup(auth,githubprovider);
    }

    const updateUserData = (name,photoUrl,currentUser) => {
        return updateProfile(currentUser, {
            displayName: name, photoURL:photoUrl
          })
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
             console.log('logged in user inside auth state observer', currentUser)
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        updateUserData,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;