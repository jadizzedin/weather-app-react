import React from 'react'
import moment from 'moment'

function Output(props) {
  let sunrise = moment.unix(props.data.sys && props.data.sys.sunrise).format('LT');
  let sunset = moment.unix(props.data.sys && props.data.sys.sunset).format('LT');
  return (
    <div>
      <h2>{props.data.name}</h2>
      <h5>{moment().format('MMMM Do YYYY, h:mm a')}</h5>
      <h2>Currently {props.data.main && props.data.main.temp}°F</h2>
      <h3>High Temp: {props.data.main && props.data.main.temp_max}°F</h3>
      <h3>Low Temp: {props.data.main && props.data.main.temp_min}°F</h3>
      <h3>Weather Conditions: {props.data.weather && props.data.weather[0] && props.data.weather[0].description}</h3>
      <h3>Sunrise: {sunrise}</h3>
      <h3>Sunrise: {sunset}</h3>
    </div>
  )
}

export default Output
