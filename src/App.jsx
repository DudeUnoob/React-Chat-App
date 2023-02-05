import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route }  from "react-router-dom"
import './App.css'
import Home from "../src/pages/Home"
import ChatRoom from './pages/ChatRoom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    
   <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Home />}/>
      <Route path='/chat/room' element={<ChatRoom />} />
    </Routes>
    
   </BrowserRouter>
   
   
  )
}

export default App
