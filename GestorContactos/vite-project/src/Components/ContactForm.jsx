import { useState } from 'react'

function ContactForm({onAddContact}){
    const [textContact, setTextContact] = useState("");
    const [phoneContact, setPhoneContact] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(textContact.trim() == "" || phoneContact.trim()=="") return 
        onAddContact(textContact, phoneContact);
        setTextContact("");
        setPhoneContact("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Nuevo contacto: "
            value={textContact}
            onChange={(e) => setTextContact(e.target.value)}
            />
            <input
            type="text"
            placeholder="Nuevo telefono: "
            value={phoneContact}
            onChange={(e) => setPhoneContact(e.target.value)}
            />
            <button>Añadir</button>
        </form>
    )
}
export default ContactForm;