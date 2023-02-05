import { Link } from "react-router-dom"


export default function FourOFour () {
    return (
        <>
        <div className="header">

        
            <h1>404, oops...looks like you're not signed in 😬</h1>
        <Link to="/">Login here</Link>
        </div>
        
        </>
        
    )
}