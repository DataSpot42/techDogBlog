import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Protected from './pages/Protected';
import { AuthContextProvider } from './pages/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Signin from './pages/SignIn';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
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
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
