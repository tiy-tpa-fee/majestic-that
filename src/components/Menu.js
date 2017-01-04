import React, { Component } from 'react'
import MenuSection from './MenuSection'
import menuItems from '../menu.json'

class Menu extends Component {

  render () {
    // console.log()
    //
    // const categories = [
    //   <li>Appetizers</li>,
    //   <li>Entrees</li>,
    //   <li>Deserts</li>,
    //   <li>Dan's Specials</li>
    // ]

    const categories = menuItems.categories.map((category, i) => {
      return <li key={i}>{category.name}</li>
    })

    const sections = menuItems.categories.map((category, i) => {
      return <MenuSection name={category.name} items={category.items} key={i} />
    })

    return <div>
      <h2>Our Menu</h2>

      <section className='categories'>
        <ul>
          {categories}
        </ul>
      </section>

      {sections}
    </div>
  }
}

export default Menu
