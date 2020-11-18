import React, { Component } from "react";
import styles from "./App.module.css";
import { Cards, Chart, ContryPicker, CountryPicker } from "./Components/index";
import { fetchData } from "./API";

export default class App extends Component {
  state = {
    data: {},
    country: '',
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    console.log(data)

    this.setState({ data, country: country });
  }

  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
    this.setState({data: data})
  }
  render() {
    const {data, country} = this.state;
    return (
      <div className="App">
        <div className={styles.container}>
          <Cards data={data}/>
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
          <Chart data={data} country={country}/>
        </div>
      </div>
    );
  }
}
