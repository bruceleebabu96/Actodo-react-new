
import reactDom from "react-dom/client"
import { Route, Routes, BrowserRouter, Link } from "react-router-dom"
import { useState } from "react"
import "./index.css"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Landing from "./pages/Landing"

const root = reactDom.createRoot(document.getElementById("root"))



function App()
{
  const [user, setuser] = useState([{

    username: "babu",
    password: "123"
}])

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login user={user} setuser={setuser}/> }></Route>
      <Route path="/signup" element={<Signup user={user} setuser={setuser}/>}></Route>
      <Route path="/landing" element={<Landing />}></Route>
    </Routes>
    </BrowserRouter>
  )

}


export default App;
