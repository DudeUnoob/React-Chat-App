import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Signin from './pages/Signin';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatRoom from './pages/ChatRoom';
import "./App.css"

function App() {
  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
        <Navigation />
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
          <Route path="/chat/room" element={
            <Protected>
              <ChatRoom />
            </Protected>
          }></Route>
        </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
