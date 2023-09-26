import React from 'react';
import { UserAuth } from '../components/AuthContext';
import { useState, useEffect } from "react"
import { readUsers } from '../api/readUsers';

const Account = () => {
  const [users,setUsers] = useState([])
  const { logOut, user } = UserAuth();
  useEffect(() => {
  
    localStorage.setItem('googleUser', JSON.stringify(user));
  }, [user]);
  console.log(user.uid)
  
  useEffect(() => {
    const fetchUsers = async () => {
        let data = await readUsers() // read blogs from database   
        setUsers(data)
    }
    fetchUsers()},[10])
   console.log(users) 
   for (let i=0; i<users.user.length; i++) {
    if (users.user[i].userID===user.iud) {
      console.log('found you')

    } else{ console.log('you are not found')} return (<div>Got to Registration Page</div>)
   }


  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  



  return (
    <div className='w-[300px] m-auto'>
      <h1 className='text-center text-2xl font-bold pt-12'>Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
      <button onClick={handleSignOut} className='border py-2 px-5 mt-10'>
        Logout
      </button>
    </div>
  );
};

export default Account;