import { useState } from "react"
import TodoItem from "./TodoItem"

function TodoList(props) {
    const activityArray = props.activityArray
    const setactivityArray = props.setactivityArray


    


    return (
        <div className="bg-[#BDB4EA] flex-grow p-5 rounded-md">
        <h1 className="text-2xl font-medium">Today's Activity</h1>
        <p>{activityArray.length ==0 ? <p>You haven't added any activity yet</p>: ""}</p>
        {
            activityArray.map(function(item, index){
                return <TodoItem activityArray={activityArray} setactivityArray={setactivityArray} item={item} index={index}></TodoItem>
                
            })
        }
    </div>
    )
}

export default TodoList