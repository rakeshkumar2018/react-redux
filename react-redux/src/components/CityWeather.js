import React, { Component } from 'react'

class CityWeather extends Component {
  constructor(props) {
    super(props)

  }
  fnData = () => {
    this.props.actions.getData()
    // alert("Hello")
  }
  render() {
    console.log("this prop = ", this.props)
    return (
      <div>
        <h2> Welcome to weather details. </h2>
        <button onClick={this.fnData}>
          Get Data
        </button>
        <div>{this.props.weather.weather.base}</div>
        <div>{this.props.weather.weather.name}</div>
        {/* <div>{this.props.weather.weather.wind.speed}</div> */}


      </div>

    )
  }
}
export default CityWeather;