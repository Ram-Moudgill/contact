import React from 'react'
import Contactform from '../Components/Contactform'
import Contactlist from '../Components/Contactlist'
import Filter from '../Components/Filter'
const Home = () => {
  return (
    <>
      <div className='row'>
        <div className='col-md-10 mx-auto my-5'>
          <Contactform></Contactform>
        </div>
        <div className='col-md-10 mx-auto my-5'>
          <Filter></Filter>
          <Contactlist></Contactlist>
        </div>
      </div>
    </>
  )
}

export default Home
