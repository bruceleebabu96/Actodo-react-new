import { useState } from "react"

function AddTodo(props) {
    const activityArray = props.activityArray
    const setactivityArray = props.setactivityArray

    const [inputitem, setinputitem] = useState("")


    function handleChange(event)

    {

        setinputitem(event.target.value)
        
    }

    function handleAdd()
    {
        
        setactivityArray([...activityArray, {id: activityArray.length+1, activity: inputitem}])
        setinputitem("")
        
    }

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activitiess</h1>
            <div>
                <input type="text" placeholder="Add Your Activity" className="border border-black p-1" onChange={handleChange} value={inputitem}/>
                <button className="p-1 bg-black border border-black text-white" onClick={handleAdd}>Add</button>
            </div>
        </div>
    )
}

export default AddTodo