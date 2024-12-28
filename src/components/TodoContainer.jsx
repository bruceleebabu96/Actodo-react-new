import { useState } from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"


function TodoContainer() {
    const [activityArray, setactivityArray] = useState(
        [
            {
                id:1,
                activity: "wakeup early"
            },
            {
                id:2,
                activity: "have breakfast"
            },
            {
                id:3,
                activity: "have lunch"
            }
        ]
    )
    return (
        <>
            <div className="flex gap-5 flex-wrap">
            <AddTodo activityArray={activityArray} setactivityArray={setactivityArray}></AddTodo>
            <TodoList activityArray={activityArray} setactivityArray={setactivityArray}></TodoList>
            </div>
        </>
    )
}

export default TodoContainer