import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactForm from './Components/ContactForm'
import ContactList from './Components/ContactList'
import ContactItem from './Components/ContacItem'

function App() {
  const [contacts, setContact] = useState([]);
  const addContact = (newContact, newPhone) => {
    setContact([...contacts, {id: Date.now(), name: newContact, phone: newPhone }]);
  };


  return (
    <>
      <h1>Gestor de contactos</h1>
      <ContactForm onAddContact={addContact}/>
      <ContactList contacts={contacts}/>
      <ContactItem/>
    </>
  )
}

export default App
