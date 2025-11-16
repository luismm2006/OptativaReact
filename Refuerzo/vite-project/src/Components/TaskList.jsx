import TaskItem from "./TaskItem";
export default function TaskList({tasks, onToggleTask}){

    return(
        <>
            {tasks.map((task)=>{
                return(
                    <TaskItem key={task.id} taskText={task.text} isComplete={task.completed} onToggleComplete={() => onToggleTask(task.id)}/>
                );
            })}
        </>
    );
}