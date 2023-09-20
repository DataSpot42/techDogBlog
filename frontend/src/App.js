
import HomePage from "./pages/blogHome"

import Login from "./jess"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      
        <div>
        
        <Routes>
        
          
          
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route 
            path ='/'
            element = {<Login />}
          />         
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App