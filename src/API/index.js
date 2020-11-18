import axios from "axios";

const url = "https://covid19.mathdro.id/api";

// cards data
export const fetchData = async (country) => {
  let flexibleURL = url;
  if (country) {
    flexibleURL = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(flexibleURL);


    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

// chart data
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      recovered: dailyData.recovered.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

// countries

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
