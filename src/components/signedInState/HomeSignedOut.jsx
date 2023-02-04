


function HomeSignedOut ({ handleSignIn }) {
    return (
        <>
        <div className="header">
            <h1>Welcome to chatty!😁</h1>
            
        </div>
        <div className="google_login">
            <button onClick={handleSignIn}>Login with Google</button>
        </div>
        </>
    )
}

export default HomeSignedOut;