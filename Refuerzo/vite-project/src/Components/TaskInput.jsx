import { useState } from "react";
export default function TaskInput({onAddTask}){
    const [tarea, setTarea] = useState("");
    const handleClick = () => {
        onAddTask(tarea);
        setTarea("");
    }
    return(
        <>
            <h1>Introudce una tarea</h1>
            <input type="text" value={tarea} onChange={(e) => setTarea(e.target.value)}/>
            <button type="button" onClick={handleClick}>Añadir</button>
        </>
    );

}