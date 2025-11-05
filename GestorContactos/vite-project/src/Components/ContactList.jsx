import ContactItem from "./ContacItem";

function ContactList({contacts, onDelete}){

    return(
        <ul>
            {contacts.map((contact)=>{
                return (
                    <ContactItem key={contact.id} item={contact} onDelete={onDelete}/>
                )
            })}
        </ul>
    )
}
export default ContactList;