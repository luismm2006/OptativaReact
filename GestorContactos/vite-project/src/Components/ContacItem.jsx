function ContactItem({item, onDelete}){
    const handleDelete=()=>{
        onDelete(item.id);
    }
    return(
        <li>
            Nombre:  
            {" " + item.name}
            <br></br>
            Teléfono: 
            {" " + item.phone}
            <br />
            <button onClick={handleDelete}>
                Eliminar
            </button>
        </li>
        
    )
}
export default ContactItem;