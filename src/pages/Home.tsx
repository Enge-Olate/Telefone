import { useEffect, useState } from "react";
import ContactsList from "../components/contactsList/ContactsList";
import { Header } from "../components/header/Header";
import type { Contact } from "../interfaces/Contact";
import mockContacts from '../assets/contacts.json'
import ActionSection from "../components/actions/ActionsSections";

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

        <ActionSection/>
        <ContactsList contacts={contacts}/>
        </>
    )
}