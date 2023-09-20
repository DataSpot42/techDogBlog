
import HomePage from "./pages/BlogHome"


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
         
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App