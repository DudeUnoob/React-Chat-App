import React, { useState, useEffect } from 'react';
import { Offcanvas,Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import "../../css/Sidebar.css"


function SideBar () {
    const [show, setShow] = useState(false);
    const [hoveredUser, setHoveredUser] = useState(null)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    function handleUserHover(i) {

        const userId = document.getElementById(i)

        userId.style.backgroundColor = "#0d6efd"
        console.log("this was triggered?")

    }

    function handleUserLeaveHover(i) {
        const userId = document.getElementById(i)

        userId.style.color = "black"

        userId.style.backgroundColor = ""
        
    }
    //show={show}
    return (
        <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
        
      <Offcanvas show={show} onHide={handleClose} backdrop={false} scroll={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Chats</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant='flush'>
            {["John Mayer", "Casey Greene", "Still in development!😀"].map((elm, i) => {
                return <ListGroup.Item id={i} onMouseEnter={() => handleUserHover(i)} onMouseLeave={() => handleUserLeaveHover(i)}>{elm}</ListGroup.Item>
            })}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
    )

}
export default SideBar;