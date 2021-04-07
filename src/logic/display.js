const display = (result, unit = 'metric') => {
  function toCelsius(f) {
    return parseInt((5/9) * (f-32));
  }
  const content = document.querySelector('#content');
  const name = document.createElement('h2');
  name.className = 'name';
  const div = document.createElement('div');
  const temp = document.createElement('strong');
  const img = document.createElement('img');
  const icon = document.createElement('img');
  name.innerHTML = result.name;
  name.style.cssText = 'margin: 0;'
  temp.innerHTML = result.main.temp;
  temp.style.cssText = 'font-size:30px; margin-right: 5px; font-weight:500';
  if (unit === 'metric') {
    if (result.main.temp >= 25) {
    div.style.cssText = 'display: flex; align-items:center; background-color: #DC3545; color: white';
    } else if (result.main.temp < 25 && result.main.temp >= 15) {
      div.style.cssText = 'display: flex; align-items:center; background-color: #FFC107; color: white';
    } else if(result.main.temp >= 10 && result.main.temp < 15){
      div.style.cssText = 'display: flex; align-items:center; background-color: #17A2B8; color: white';
    } else{
      div.style.cssText = 'display: flex; align-items:center; background-color: #F8F9FA; color: black';
    }
  } else {
    if (toCelsius(result.main.temp) >= 25) {
    div.style.cssText = 'display: flex; align-items:center; background-color: #DC3545; color: white';
    } else if (toCelsius(result.main.temp) < 25 && toCelsius(result.main.temp) >= 15) {
      div.style.cssText = 'display: flex; align-items:center; background-color: #FFC107; color: white';
    } else if(toCelsius(result.main.temp) >= 10 && toCelsius(result.main.temp) < 15){
      div.style.cssText = 'display: flex; align-items:center; background-color: #17A2B8; color: white';
    } else{
      div.style.cssText = 'display: flex; align-items:center; background-color: #F8F9FA; color: black';
    }
  }
  img.src = `https://www.countryflags.io/${result.sys.country}/shiny/32.png`;
  icon.src = `http://openweathermap.org/img/w/${result.weather[0].icon}.png`;
  content.appendChild(name);
  div.appendChild(temp);
  div.appendChild(img);
  div.appendChild(icon);
  content.appendChild(div);
};

export default display;
