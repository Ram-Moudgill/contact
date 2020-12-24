import React,{useState,useEffect,useContext} from 'react'
import ContactContext from '../context/contact/contactcontext'
const Contactform = () => {
  const [contact,setContact]=useState({
    name:'',
    email:'',
    phone:'',
    type:'personal'
  })
  const contactContext= useContext(ContactContext)
  const { name ,type,email,phone}=contact
  const onchange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value})
  }
  useEffect(() => {
    if(contactContext.current !==null){
      setContact(contactContext.current)
    }
    else
    {
      setContact({name:'',
      phone:'',
      email:'',
      type:'personal'})
    }
  }, [contactContext,contactContext.current])
  const onsubmit=(e)=>{
    e.preventDefault()
    contactContext.addContact(contact)
    setContact({name:'',
    phone:'',
    email:'',
    type:'personal'})
  }
  const clearAll=()=>{
    contactContext.clearCurrent()
  }
  return (
    <>
    <div className="col-sm-4 mx-auto">
    <h4>{contactContext.current !==null ?'Update Contact' :'Add Contact Contact' }</h4>
      <form onSubmit={onsubmit}>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Name</label>
          <input
            type='text'
            name='name'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Enter name'
            value={name}
            onChange={onchange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Email</label>
          <input
            type='email'
            name='email'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='email'
            value={email}
            onChange={onchange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>phone</label>
          <input
            type='text'
            name='phone'
            className='form-control'
            id='phone'
            placeholder='phone'
            value={phone}
            onChange={onchange}
            required 
            minLength='10'
        
          />
        </div>
        <label className='form-check- mb-2'>
            Type
          </label> 
        <div className='form-check'>
          <input
            type='radio'
            className='form-check-input'
            id='Personal'
            value='personal'
            name='type'
            checked={type==='personal'}
            onChange={onchange}
          />
           
            <label className='form-check-label mr-3' htmlFor='personal'>
            Personal
          </label>
          <input
            type='radio'
            className='form-check-input mx-2'
            id='professional'
            value='professional'
            name='type'
            checked={type==='professional'}
            onChange={onchange}
          />
            <label className='form-check-label ml-4' htmlFor='professional'>
           Professional
          </label>
        </div>
        <input type='submit' className='btn btn-sm btn-dark mt-3' value={contactContext.current !==null ?'Update Contact' :'Add Contact' }/>
        <br/>
        {
          contactContext.current && (
            <button  className='btn btn-sm btn-warning mt-3' onClick={clearAll} >Clear All</button>
          )
        }
      </form>
      </div>
    </>
  )
}

export default Contactform
