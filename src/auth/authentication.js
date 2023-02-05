import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth"
const provider = new GoogleAuthProvider();
import { app } from "../config/firebaseConfig"
const auth = getAuth()

export const authenticateUser = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken
            window.localStorage.setItem("user", JSON.stringify(result))
            const user = result.user
            return result
        }).catch((error) => {
            const errorCode = error.code
            const errorMessage = error.errorMessage
            const email = error.customData.email

            const credential = GoogleAuthProvider.credentialFromError(error)
        })
}

export const signoutAuthenticatedUser = () => {
    signOut(auth).then(() => {
        console.log("it was successfull")
        window.localStorage.clear()
    }).catch((error) => {
        console.log(error)
    })
}

