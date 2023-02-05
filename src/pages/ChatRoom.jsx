import { Container, Button, Offcanvas } from "react-bootstrap";
import React, {useState, useEffect} from "react"
import "../css/Chatroom.css";

function ChatRoom () {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="chatBox">
        <Container>
      <Button variant="primary" onClick={handleShow} className="sideBar">
        Launch
      </Button>
      </Container>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Chats</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         In development!
        </Offcanvas.Body>
      </Offcanvas>
      </div>
    </>
  );
}

export default ChatRoom;