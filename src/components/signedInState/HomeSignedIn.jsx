import { Link } from "react-router-dom"


function HomeSignedIn ({ handleSignOut }) {
    return (
        <>
        <div className='header'>
            <h1>Go to the chatroom</h1>
            <Link to={"/chat/room"}>Here</Link>
            <br />
            <br />
            <button onClick={handleSignOut}>Sign out</button>
        </div>
        </>
    )
}

export default HomeSignedIn