import Navbar from "./components/NavBar"
import HomePage from "./pages/BlogHome"


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
         
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App