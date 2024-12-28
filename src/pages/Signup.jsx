import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Signup(props) {
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


    function AddUser() {


        setuser([...user, { username: eusername, password: epassword }])
        navigate("/")

    }
    return (

        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>I help you manage your activities after you Signup:)</p>
                <input type="text" placeholder="username" onChange={handleusername} className="bg-transparent border-black border rounded-md p-1 my-1 w-52" />
                <br />
                <input type="text" placeholder="password" onChange={handlepassword} className="bg-transparent border-black border rounded-md p-1 my-1 w-52" />
                <br />
                <input type="text" placeholder="confirm password" className="bg-transparent border-black border rounded-md p-1 my-1 w-52" />
                <br />
                <button className="bg-yellow-300 w-24 p-1 rounded-md" onClick={AddUser}>Signup</button>
                <p>already have an account? <Link to={"/"} className="underline">Login</Link></p>
            </div>
        </div>

    )
}

export default Signup