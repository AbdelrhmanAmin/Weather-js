const getWeather = async (city = 'Alexandria', unit = 'metric') => {
  try {
    let result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=79778be970abf18815ab93fec0ff6394`,
      {
        mode: 'cors',
      }
    );
    result = await result.json();
    return result;
  } catch (error) {
    return getWeather();
  }
};

export default getWeather;
