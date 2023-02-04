import React, { useState, useEffect } from 'react';
import { authenticateUser, signoutAuthenticatedUser, } from "../auth/authentication"
import {getAuth, signOut, onAuthStateChanged} from "firebase/auth"
import { Link } from 'react-router-dom';
import HomeSignedOut from '../components/signedInState/HomeSignedOut';
import HomeSignedIn from '../components/signedInState/HomeSignedIn';

const auth = getAuth()

function Home(){
    const [signedIn, signInState] = useState(false)

    

    useEffect(() => {
       
            onAuthStateChanged(auth, (user) => {
                
                if(user) {
                    signInState(true)
                    return user
                    
                } else {
                    signInState(false)
                }
            })
        
        
    },[signedIn])

    const handleSignIn = () => {
        
       if(typeof authenticateUser() === 'undefined') signInState(true)
       
    }

    const handleSignOut = () => {
        signoutAuthenticatedUser()
        signInState(false)
        
    }

    


   if(signedIn == true) {
    return (
        <HomeSignedIn handleSignOut={handleSignOut}/>
        
    )
} else {
    return (
        
        <HomeSignedOut handleSignIn={handleSignIn}/>

    )
}
   

}

export default Home;