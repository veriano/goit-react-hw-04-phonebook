import { useState, useEffect } from 'react';
// import useLocalStorage from './hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactsList';
import Filter from './Components/Filter';



function App() {
  
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(()=>{
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  },[contacts])


  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  }

  const addContact = (data) => {
    const contact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    }
    console.log(contact);
    if(contacts !== null) {
      const contactName = contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());
    
      if(contactName) {
        alert(`${data.name} already in contacts.`);
        return; 
      }
      setContacts(prevContacts => [...contact,...prevContacts]);
    }
  }

  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  const getVisibleContacts = () => {
    const normolizedFilter = filter.toLowerCase();

    if(contacts !== null) {
    return setContacts(contacts.filter(contact => contact.name.toLowerCase().includes(normolizedFilter)));
    }
  }

  const visibleContacts = getVisibleContacts();
   
    return (
      <>
        <h1 className={ s.Title }><b>Phonebook</b></h1>

        <ContactForm onSubmitHandler={ addContact } />
      
        <h2 className={ s.Title }><b>Contacts</b></h2>

        <Filter value={ filter } onChange={ changeFilter }/>

        <ContactList
          contacts={ visibleContacts }
          onDeleteContact={ deleteContact }  />
      </>
    )
  }

export default App;