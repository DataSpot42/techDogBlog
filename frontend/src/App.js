
import Login from "./jess"
import HomePage from "./pages/BlogHome.js"
import Navbar from "./components/NavBar"



import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      
        <div>
        <Navbar />
        <Routes>
        
          
        
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route 
            path ='/Login'
            element = {<Login />}
          />         
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App