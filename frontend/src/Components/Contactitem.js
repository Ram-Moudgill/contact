import React,{useContext} from 'react'
import ContactContext from '../context/contact/contactcontext'
const Contactitem = ({contact}) => {
    const {email,phone,name,type,id}=contact
    const contactContext= useContext(ContactContext)
    const {deleteContact,setCurrent,clearCurrent}=contactContext
    const deleteCon=()=>{
      deleteContact(id)
      clearCurrent()
    }
  return <>
          <div className="card p-4 mx-3">
              <p className='d-inline-block font-weight-bold'>{name.charAt(0).toUpperCase()+name.slice(1)} <span className={type==='personal'?'badge badge-primary':'badge badge-danger'}>{type.charAt(0).toUpperCase()+type.slice(1)}</span></p> 
              <p>Phone</p>
              <p><i className="fa fa-phone" aria-hidden="true"></i>{phone}</p>
              <p>email</p>
              <p><i className="fa fa-envelope" aria-hidden="true"></i> {email}</p>
              <div className="buttons">
              <button className='btn btn-sm  btn-dark mr-4' onClick={()=>setCurrent(contact)}>Edit</button>
              <button className='btn btn-sm btn-danger' onClick={deleteCon}>Delete</button>
              </div>
          </div>

  </>
}

export default Contactitem
