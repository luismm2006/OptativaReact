import { useState } from 'react'

function TaskList() {
    return(
        <>
            <input type="text" name="text" id="text" />
            <button type="button" name="btnAdd" onClick={handleAdd}>Add</button>
            <ul name="ul" id="ul">

            </ul>
        </>
    )
}
function handleAdd(event){
    const [text, setText] = useState("");


}

export default TaskList;