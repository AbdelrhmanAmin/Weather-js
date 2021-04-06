import getWeather from './logic/api';
import display from './logic/display';

let unit = 'metric';
const content = document.querySelector('#content');
const input = document.querySelector('#City');
const btn = document.querySelector('.find');
const form = document.querySelector('.form');
const C = document.querySelector('#C');
const F = document.querySelector('#F');

const currentTab = async (location) => {
  let result;
  document.getElementById('content').innerHTML = '';
  result = await getWeather(location, unit)
  display(result)
  btn.addEventListener('click', async () => {
    result = await getWeather(input.value, unit)
    C.checked = true;
    F.checked = false;
    document.getElementById('content').innerHTML = '';
    if (result.cod == '400' || result.cod == '404') {
      input.value = ''
      document.querySelector('.jumbotron').style.cssText ="background:transparent !important"
      document.body.style.backgroundImage = 'url(https://media3.giphy.com/media/bR9c6Kc721ylG/giphy.gif)';
      document.body.style.backgroundRepeat = "repeat";
      document.body.style.backgroundColor = "red";
      form.style.display = 'none'
      document.body.style.color = 'white'
      input.style.color = 'black';
    } else {
      document.querySelector('.jumbotron').style.cssText ="background: #EEEEEE !important"
      document.body.style.backgroundImage = '';
      document.body.style.backgroundColor = "white";
      form.style.display = 'block'
      document.body.style.color = 'black'
    }
    display(result)
  })
  C.addEventListener('click', async () => {
    unit = 'metric';
    if (input.value !== '') {
      result = await getWeather(input.value, unit);
    } else {
      result = await getWeather(location, unit)
    }
    document.getElementById('content').innerHTML = '';
    display(result)
  })
  F.addEventListener('click', async () => {
    unit = 'imperial';
    if (input.value !== '') {
      result = await getWeather(input.value, unit);
    } else {
      result = await getWeather(location, unit)
    }
    document.getElementById('content').innerHTML = '';
    display(result)
  })
}
currentTab()