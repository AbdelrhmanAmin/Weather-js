const display = (result, unit = 'metric') => {
  function toCelsius(f) {
    return parseInt((5 / 9) * (f - 32), 10);
  }
  const content = document.querySelector('#content');
  const container = document.querySelector('.container');
  const name = document.createElement('h2');
  name.className = 'name';
  const div = document.createElement('div');
  const temp = document.createElement('strong');
  const img = document.createElement('img');
  const icon = document.createElement('img');
  name.innerHTML = result.name;
  name.style.cssText = 'margin: 0; background-color: #FFFFF';
  temp.innerHTML = parseInt(result.main.temp, 10);
  temp.style.cssText = 'font-size:30px; margin-right: 5px; font-weight:500';
  div.style.cssText = 'display: flex; align-items:center';
  if (unit === 'metric') {
    if (result.main.temp >= 25) {
      container.style.cssText = 'background-size: cover; background-repeat: no-repeat; background-image: url(https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/d/1e/d1edbad6-3d14-11e8-a5b2-0bdd0b50fe9a/5acd456abcb5b.image.jpg?resize=1200%2C599)';
    } else if (result.main.temp < 25 && result.main.temp >= 18) {
      container.style.cssText = 'background-size: cover; background-repeat: no-repeat; background-image: url(https://wallpaperaccess.com/full/1540016.jpg)';
    } else if (result.main.temp >= 10 && result.main.temp < 18){
      container.style.cssText = 'background-size: cover; background-repeat: no-repeat; background-image: url(https://i.pinimg.com/originals/cb/6d/2c/cb6d2c974f71580b964c1f931e8b2aa3.jpg)';
    } else {
      container.style.cssText = ' background-size: cover; background-repeat: no-repeat; background-image: url(https://image.freepik.com/free-vector/winter-landscape-with-falling-snow-snowy-background_209425-650.jpg)';
    }
  } else {
    if (toCelsius(result.main.temp) >= 25) {
      container.style.cssText = 'background-size: cover; background-repeat: no-repeat; background-image: url(https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/d/1e/d1edbad6-3d14-11e8-a5b2-0bdd0b50fe9a/5acd456abcb5b.image.jpg?resize=1200%2C599)';
    } else if (toCelsius(result.main.temp) < 25 && toCelsius(result.main.temp) >= 18) {
      container.style.cssText = 'background-size: cover; background-repeat: no-repeat; background-image: url(https://wallpaperaccess.com/full/1540016.jpg)';
    } else if(toCelsius(result.main.temp) >= 10 && toCelsius(result.main.temp) < 18){
      container.style.cssText = 'background-size: cover; background-repeat: no-repeat; background-image: url(https://i.pinimg.com/originals/cb/6d/2c/cb6d2c974f71580b964c1f931e8b2aa3.jpg)';
    } else{
      container.style.cssText = ' background-size: cover; background-repeat: no-repeat; background-image: url(https://image.freepik.com/free-vector/winter-landscape-with-falling-snow-snowy-background_209425-650.jpg)';
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
