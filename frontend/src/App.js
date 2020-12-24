import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Screens/Home'
import About from './Screens/About'
import contactState from './context/contact/ContactState'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import ContactState from './context/contact/ContactState'
const App = () => {
  return (
    <>
      <ContactState>
        <Router>
          <div className='container-fluid m-0 p-0'>
            <header>
              <Navbar></Navbar>
            </header>
            <main>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Redirect to='/'></Redirect>
              </Switch>
            </main>
          </div>
        </Router>
      </ContactState>
    </>
  )
}
export default App
