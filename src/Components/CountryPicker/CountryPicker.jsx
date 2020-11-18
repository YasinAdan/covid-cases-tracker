import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../API/index";

const CountryPicker = ({handleCountryChange}) => {
  const [fetchedcountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, []);
  return (
    <div>
      <FormControl className={styles.formcontrol}>
        <NativeSelect defaultValue='' onChange={(e) => {handleCountryChange(e.target.value)}}>
          <option value="global">Global</option>
          {fetchedcountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
