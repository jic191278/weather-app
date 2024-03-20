import axios from 'axios';

const getData = (
  setSelectedDate,
  setLocation,
  setForecasts,
  city,
  setErrorMessage
) => {
  let api = 'https://cmd-shift-weather-app.onrender.com/forecast';
  // let api = 'https://cmd-shift-weather-app-alt.onrender.com/forecast';

  if (city) {
    api += `?city=${city}`;
  }

  return axios
    .get(api)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setLocation(response.data.location);
      setForecasts(response.data.forecasts);
    })
    .catch((err) => {
      console.log(err.response.status);
      if (err.response.status === 404) {
        setErrorMessage('Unable to find this city!');
      }
    });
};

export default getData;
