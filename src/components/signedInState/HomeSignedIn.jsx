import { Link } from "react-router-dom"


function HomeSignedIn ({ handleSignOut }) {
    const user = JSON.parse(window.localStorage.getItem("user")) || ""
    
    return (
        <>
        <div className='header'>
            <h1>Go to the chatroom</h1>
            
            <br />
            <img src={user.user?.photoURL} style={{ borderRadius:"50%" }}/>
            <br />
            <br />
            <p><b>Welcome {user.user?.displayName}!</b></p>
            
            <Link to={"/chat/room"}>Here</Link>
            <br />
            <br />
            <button onClick={handleSignOut}>Sign out</button>
        </div>
        </>
    )
}

export default HomeSignedIn