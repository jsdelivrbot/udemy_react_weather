import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

export class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    // const temps = cityData.list.map(weather => weather.main.temp);
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (temp - 273.15) * 1.8 + 32);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    const { lon, lat } = cityData.city.coord; // es6 to deconstruct it

    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="°F" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
      return(
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (°F)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      );
  }
}

// function mapStateToProps(state) {
//   return { weather: state.weather };
// }

// es6
function mapStateToProps({ weather }) {
  // return { weather: weather }; or use es6 below
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
