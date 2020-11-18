import React, { Component } from "react";
import styles from "./App.module.css";
import { Cards, Chart, ContryPicker, CountryPicker } from "./Components/index";
import { fetchData } from "./API";
import covidImg from "./Images/covid-img.png";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }
  render() {
    const { data, country } = this.state;
    return (
      <div className="App">
        <div className={styles.container}>
          <img src={covidImg} className={styles.image} />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
      </div>
    );
  }
}
