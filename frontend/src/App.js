/* import Navbar from "./components/Navbar" */
import HomePage from "./pages/blogHome"

/* import Login from "./pages/Login" */

import { BrowserRouter, Route, Routes } from "react-router-dom"
/* import './component/app.css' */
const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
      
        <div>
        <Navbar />
        <Routes>
        <Route
            path='/'
            element={<HomePage />}
          />
         {/*  <Route
            path='/basket/:id'
            element={<Basket />}
          />
          <Route
            path='/shop/:id'
            element={<Shop />}
          /> */}
         
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App