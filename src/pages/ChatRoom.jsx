import React, { useEffect, useState } from 'react';
import SideBar from '../components/chatroom/SideBar';
import { getAuth, onAuthStateChanged } from "firebase/auth"
import FourOFour from './404/FourOFour';
const auth = getAuth()

function ChatRoom () {
    const [signedIn, setSignedIn] = useState(null)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setSignedIn(true)
            } else {
                setSignedIn(false)
            }
        })
    }, [])


    if(signedIn == true){
        
            return (
                <>
                <h1>Open Conversations</h1>
                <br />
                <SideBar />
                </>
            )
        
    } else {
        return <FourOFour />
    }
    
}



export default ChatRoom;
