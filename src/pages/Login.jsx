import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
// import Landing from "./Landing"
import { useNavigate } from "react-router-dom"



function Login(props) {

    const user = props.user
    const setuser = props.setuser

    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()
    const [puser, setpuser] = useState(true)
    const navigate = useNavigate()
    

    function handleusername(evt) {
        setEusername(evt.target.value)

    }


    function handlepassword(evt) {
        setEpassword(evt.target.value)

    }

    function checkuser() {
        
        var userfound = false
        user.forEach(function (item) {
            
            if(item.username === eusername && item.password === epassword) {
                
                

                console.log("login successful")
                 userfound = true
                 navigate("/landing", {state:{user:eusername}})
                 

            }


            

        })
        if(userfound === false) {
                
            console.log(userfound)
            setpuser(false)
            
        }

    }





    return (

        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>{puser ? <p>I help you manage your activities after you Login:)</p> : <p className="text-red-600">signup before login</p>}</p>
                <input type="text" placeholder="username" className="bg-transparent border-black border rounded-md p-1 my-1 w-52" onChange={handleusername} />
                <br />
                <input type="text" placeholder="password" className="bg-transparent border-black border rounded-md p-1 my-1 w-52" onChange={handlepassword} />
                <br />
                <button className="bg-violet-600 w-24 p-1 rounded-md" onClick={checkuser}>Login</button>
                <p>Don't have an account? <Link to={"/signup"} className="underline">Sign Up</Link></p>
            </div>
        </div>

    )
}

export default Login