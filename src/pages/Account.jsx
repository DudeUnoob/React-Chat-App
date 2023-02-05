import React from 'react';
import { UserAuth } from '../context/AuthContext';
import "../css/account.css"
import {Button} from "react-bootstrap"

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='userInfo'>
      <h1 className='text-center text-2xl font-bold pt-12'>Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
      <Button onClick={handleSignOut}>Logout</Button>
      
    </div>
   
  );
};

export default Account;
