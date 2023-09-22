import React from 'react';
import Login from "./jess"
import HomePage from "../src/pages/BlogHome"
import Navbar from "./components/NavBar"
import CreateBlog from "./pages/CreateBlog"
import Protected from './pages/Protected';
import { AuthContextProvider } from './components/AuthContext';
import Account from './pages/Account';
import Signin from './pages/SignIn';
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
=======
import { BrowserRouter, Route, Routes } from "react-router-dom"
>>>>>>> upstream/main
import RegPage from './pages/RegPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      
        <div>
        <AuthContextProvider>
        <Navbar />
        <Routes>
        <Route
            path='/createBlog'
            element={<CreateBlog />}
          />      
          
        
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route 
            path ='/Login'
            element = {<Login />}
          />
          <Route 
            path ='/RegPage'
            element = {<RegPage />}
          />
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
      </BrowserRouter>
    </div>
  )
}

export default App