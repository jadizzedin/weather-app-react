import axios from 'axios'

const url = 'http://api.openweathermap.org/data/2.5/weather?';
const units = '&units=imperial';
const apiKey = '&appid=3dd5b43d59723b307131c10bc8913e89';

const apiCall = async (input) => {
  let searchURL = url + (isNaN(input) ? 'q=':'zip=') + input + units + apiKey;

  let response = await axios.get(searchURL);
  let weatherInfo = response.data

  return weatherInfo
};

export default apiCall;
