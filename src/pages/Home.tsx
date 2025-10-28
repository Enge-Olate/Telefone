import ContactsList from "../components/contactsList/ContactsList";
import { Header } from "../components/header/Header";
import { useEffect, useState } from "react";
import type { Contact } from "../interfaces/Contact";
import mockContacts from '../assets/contacts.json'

export default function Home(){
    const [contacts, setContacts] = useState<Contact[]>(mockContacts)
    useEffect(()=>{
        fetch('src/assets/contacts.json')
            .then(res => res.json())
            .then(data => setContacts(data))
    }, [])
    return(
        <>
        <Header/>
        <ContactsList contacts={contacts}/>
        </>
    )
}