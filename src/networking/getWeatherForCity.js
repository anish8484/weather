/* globals fetch */
import isServerJsonValid from './isServerJsonValid';

const apiEndpoint = 'https://api.openweathermap.org/data/2.5/forecast';
const appId = '8cd7fb530f488863ddceaf37665fdfd6';

const fetchRequestObject = {
  method: 'GET',
  headers: {
    Accept: 'application/json'
  },
  mode: 'cors'
};

const getWeatherForCity = city =>
  fetch(
    `${apiEndpoint}?q=${city}&APPID=${appId}&units=metric`,
    fetchRequestObject
  )
    .then(serverResponse => serverResponse.json())
    .then(serverJson => {
      if (!isServerJsonValid(serverJson)) {
        throw new Error('Sorry, the server did not return valid weather data');
      }

      return serverJson;
    });

export default getWeatherForCity;
