const API_URL: string = "http;//localhost:3000";

export const api ={
    getContacts: async ()=>{
        const res = await fetch(`${API_URL}/contacts`);
        return res.json();
    },
    createContact: async(contact: any)=>{
        const res = await fetch(`${API_URL}/contacts`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        });
        return res.json()
    },
    deleteContact: async(id: string)=>{
        await fetch(`${API_URL}/contacts/${id}`,{
            method: "DELETE"
        });
    },
    updateContact: async(contact : any)=>{
        const res = await fetch(`${API_URL}/contacts/${contact.id}`,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        });
        return res.json()
    }
}