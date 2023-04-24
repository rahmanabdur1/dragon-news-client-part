import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader]=useState(true)

    const providerLogin = (provider) => {
          setLoader(true)
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
          setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const verifyEmail =()=>{
         return sendEmailVerification(auth.currentUser)
    }
    const upDateProfile=(profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
           
            if(  currentUser === null ||currentUser.emailVerified){
                setUser(currentUser)
            }
             setLoader(false)
        });

        return () => {
            unsubscribe();
        }

    }, [])


    const authInfo = { 
        user,
        upDateProfile, 
        providerLogin, 
        logOut,
         createUser, 
         setLoader,
         signIn,
         verifyEmail,
         loader};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;