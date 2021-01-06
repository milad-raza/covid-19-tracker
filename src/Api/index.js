import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

// Global Data
export const globalData = async () => {
    try {
      const { data: { confirmed, recovered, deaths, lastUpdate },
      } = await axios.get(url)
      
      return { confirmed, recovered, deaths, lastUpdate };
    }
    catch(error) {
        return error;
    }
}

// Country Data
export const countryData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

// Countries Name
export const countriesName = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};