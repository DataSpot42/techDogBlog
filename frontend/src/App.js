
import Login from "./jess"
import HomePage from "../src/pages/BlogHome"
import Navbar from "./components/NavBar"
import CreateBlog from "./pages/CreateBlog"



import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      
        <div>
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
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App