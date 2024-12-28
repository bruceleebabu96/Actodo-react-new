function TodoItem(props)

{

    const activityArray = props.activityArray
    const setactivityArray = props.setactivityArray

    function handleDelete(deleteid)
    {
            var tempArray= activityArray.filter(function(item)
        {
            if(item.id == deleteid)
            {
                return false
            }
            else
            {
                return true
            }
        })
    
        setactivityArray(tempArray)
        
    } 
    return (
        <p>{props.index+1}. {props.item.activity} <button style={{color: "red"}} onClick={()=>handleDelete(props.item.id)}>Delete</button></p>
)
}

export default TodoItem