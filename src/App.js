import { useState, useEffect } from 'react';
// import useLocalStorage from './hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactsList';
import Filter from './Components/Filter';



function App() {
  
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts"))) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  useEffect(() => {
      window.localStorage.setItem("contacts", JSON.stringify(contacts));
  },[contacts]);

  const [filter, setFilter] = useState('');

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  }

  const addContact = data => {
    const contact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    }
    console.log(contact);
    if (contacts !== null) {
      const contactName = contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());
      
      if (contactName) {
        alert(`${data.name} already in contacts.`);
        return;
      }
    }
    if (contacts !== null) {
      setContacts(prevState => [contact, ...prevState.contacts]);
    }
  }

  const deleteContact = (contactId) => {
    setContacts(prevState => ({ ...prevState.filter(contact => contact.id !== contactId)}));
  }

    const getVisibleContacts = () => {
      const normolizedFilter = filter.toLowerCase();
      if (contacts !== null) {
        setContacts(contacts.filter(contact => contact.name.toLowerCase().includes(normolizedFilter)));
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