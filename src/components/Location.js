import React, { Component } from 'react'
import data from '../data.json'

// GET YOUR OWN KEY!
const MAPS_API_KEY = 'AIzaSyCzmqcPehchAR_Ey6YAvkNLXeRHPOarY2Y'

class Location extends Component {

  render () {
    // Find the location that matches the slug from the URL
    const location = data.locations.find(l => l.slug === this.props.params.slug)
    return <div>
      <h2>{location.name}</h2>
      <div className='google-maps'>
        <iframe width='600' height='450' frameBorder='0' style={{border: 0}}
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:${location.mapPlaceId}&key=${MAPS_API_KEY}`} allowFullScreen />
      </div>
      <p>{location.address}</p>
      <table>
        <tbody>
          {location.hours.map((period, i) => {
            return <tr key={i}>
              <th>{period.days}</th>
              <td>{period.hours}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  }
}

export default Location
