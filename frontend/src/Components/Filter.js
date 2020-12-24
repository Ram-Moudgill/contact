import React,{useContext, useState} from 'react'
import ContactContext from '../context/contact/contactcontext'
const Filter = () => {
    const contactContext=useContext(ContactContext)
    const {filterContact,clearFilter}=contactContext
    const [value, setvalue] = useState(null)

    const getValue=(e)=>{
        if(e.target.value !==null){
         setvalue(e.target.value)
        filterContact(value)}
        else
        {
            clearFilter()
        }
    }
    return (
        <div>
            <input type="text" className="form-control"  placeholder='filter contacts' value={value} onChange={getValue}/>
        </div>
    )
}

export default Filter
