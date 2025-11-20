import ContactItem from "./ContactItem";

export default function ContactList({task, deleteTask, update}){

    return(
        <>
        {task.map((t)=>{
            return(
                <ContactItem key={t.id} indice={t.id} title={t.title} priority={t.priority} deleteTask={deleteTask} update={update}/>
            );
        })}
       </>
    );
}