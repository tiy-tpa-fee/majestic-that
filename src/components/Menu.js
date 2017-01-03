import React, { Component } from 'react'

class Menu extends Component {

  render () {
    return <div>
      <h2>Our Menu</h2>

      <nav>
        <ul>
          <li>Appetizers</li>
          <li>Entrees</li>
          <li>Deserts</li>
          <li>Dan's Specials</li>
        </ul>
      </nav>

      <section>
        <h3>Appetizers</h3>

        <table>
          <tbody>
            <tr>
              <th>Spring Rolls</th>
              <td>Yummy</td>
              <td>$400</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  }
}

export default Menu
