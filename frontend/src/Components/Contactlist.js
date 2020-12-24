import React ,{useContext,useEffect}from 'react'
import Contactitem from '../Components/Contactitem'
import ContactContext from '../context/contact/contactcontext'
const Contactlist = () => {
  const contactcontext=useContext(ContactContext)
  const {contacts,filtered}=contactcontext
  if(contacts.length === 0){
      return <h5>Please Add contacts</h5>
  }
  else{
  return (
    <>
    <h4>Contact List</h4>
    <div className="row">
    {filtered !== null ?  filtered.map(contact=>(
        <div key={contact.id} className="col-md-4 my-3">
        <Contactitem contact={contact}></Contactitem>
        </div>
      )) :  contacts.map(contact=>(
        <div key={contact.id} className="col-md-4 my-3">
        <Contactitem contact={contact}></Contactitem>
        </div>
      ))}
      </div>
    </>

  )}
}

export default Contactlist
