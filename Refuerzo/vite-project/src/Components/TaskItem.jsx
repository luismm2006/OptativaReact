export default function TaskItem({taskText, isComplete, onToggleComplete}){
    const tachada = {textDecoration: 'line-through'};
    return (
        <>
            <p style={isComplete ? tachada : {}} onClick={onToggleComplete}>{taskText}</p>   
        </>
    );
}