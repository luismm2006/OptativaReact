
function ContactList({contacts}){

    return(
        <ul>
            {contacts.map((contact)=>{
                return (

                <li key={contact.id}>
                    {contact.name}
                    {contact.phone}
                </li>
                )
            })}
        </ul>
    )
}
export default ContactList;