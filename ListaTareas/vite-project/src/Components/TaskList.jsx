import { useState } from 'react'

function TaskList() {
    const [text, setText] = useState("");
    const [tasks, setTask] = useState([]);
    function handleChange(event){
        setText(event.target.value);
    }
    function handleAdd(){
        if(text.trim()==="")return;
        setTask([...tasks, text]);
        setText("");
    }
    function handleDelete(indexDelete){
        setTask(tasks.filter((task, index) => index !== indexDelete));
    }
    return(
        <>
            <input type="text" name="text" id="text" value={text} onChange={handleChange}/>
            <button type="button" name="btnAdd" onClick={handleAdd}>Add</button>
            <ul name="ul" id="ul">
                {tasks.map((task,index)=>(
                    <li key={index}>{task} <button onClick={() => handleDelete(index)}>X</button></li>
                ))}
            </ul>
        </>
    )
}

export default TaskList;