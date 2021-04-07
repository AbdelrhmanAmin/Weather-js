import getWeather from './logic/api';
import display from './logic/display';

let unit = 'metric';
const input = document.querySelector('#City');
const btn = document.querySelector('.find');
const form = document.querySelector('.form');
const C = document.querySelector('#C');
const F = document.querySelector('#F');
const container = document.querySelector('.container');

const currentTab = async (location) => {
  let result;
  unit = 'metric';
  document.getElementById('content').innerHTML = '';
  result = await getWeather(location, unit);
  display(result);
  btn.addEventListener('click', async () => {
    unit = 'metric';
    result = await getWeather(input.value, unit);
    C.checked = true;
    F.checked = false;
    document.getElementById('content').innerHTML = '';
    if (result.cod === '400' || result.cod === '404') {
      input.value = '';
      document.body.style.backgroundImage = 'url(https://media3.giphy.com/media/bR9c6Kc721ylG/giphy.gif)';
      document.body.style.backgroundRepeat = 'repeat';
      document.body.style.backgroundColor = 'red';
      form.style.cssText = 'display: none !important';
      btn.className = 'btn-primary'
      document.body.style.color = 'white';
      input.style.color = 'black';
      container.style.backgroundImage = ''
    } else {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundColor = 'white';
      form.style.display = 'block';
      document.body.style.color = 'black';
    }
    display(result);
  });
  C.addEventListener('click', async () => {
    unit = 'metric';
    result = await getWeather(document.querySelector('.name').innerHTML, unit);
    document.getElementById('content').innerHTML = '';
    display(result, unit);
  });
  F.addEventListener('click', async () => {
    unit = 'imperial';
    result = await getWeather(document.querySelector('.name').innerHTML, unit);
    document.getElementById('content').innerHTML = '';
    display(result, unit);
  });
};
currentTab();
