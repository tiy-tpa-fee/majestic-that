import React, { Component } from 'react'

import Home from './Home'

class App extends Component {

  render () {
    return <div>
      <h1>Majestic Thai</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/menu'>Menu</a>
          </li>
          <li>
            <a href='/contact'>Contact Us</a>
          </li>
          <li>
            <a href='/locations'>Locations</a>
          </li>
        </ul>
      </nav>
      <main>
        <Home />
      </main>
      <footer>
        <p>&copy; 2017 Majestic Thai. Built with &hearts; at The Iron Yard, in St Petersburg, Florida.</p>
      </footer>
    </div>
  }
}

export default App
