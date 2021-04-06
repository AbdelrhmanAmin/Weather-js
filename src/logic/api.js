const getWeather = async (city = 'Alexandria') => {
  const content = document.querySelector('#content');
  const input = document.querySelector('#City');
  const btn = document.querySelector('.find');
  const C = document.querySelector('#C');
  const F = document.querySelector('#F');
  const name = document.createElement('h1');
  const temp = document.createElement('strong')
  let result;
  btn.addEventListener('click', async () => {
    city = input.value;
    C.checked = true;
    F.checked = false;
    result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=79778be970abf18815ab93fec0ff6394`, {
      mode: 'cors'
    })
    result = await result.json()
    name.innerHTML = result.name;
    temp.innerHTML = parseInt(result.main.temp);
    content.appendChild(name)
    content.appendChild(temp)
  })
  if (result === undefined) {
        result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=79778be970abf18815ab93fec0ff6394`, {
      mode: 'cors'
    })
    result = await result.json()
    name.innerHTML = result.name;
    temp.innerHTML = parseInt(result.main.temp);
    content.appendChild(name)
    content.appendChild(temp)
  }
  C.addEventListener('click', () => {
    let formula = (parseInt(result.main.temp) * 1.8 ) + 32;
    console.log(formula, temp.innerHTML, 'C', result.main)
    if (C.checked === true && parseInt(temp.innerHTML) === parseInt(formula)) {
      temp.innerHTML = parseInt((temp.innerHTML - 32) / 1.8);
      content.appendChild(temp)
    }
  })
  F.addEventListener('click', () => {
    let formula = (parseInt(result.main.temp) * 1.8 ) + 32;
    if (F.checked === true && parseInt(temp.innerHTML) !== parseInt(formula)) {
      console.log(formula, temp.innerHTML, "F",  result.main)
      temp.innerHTML = (parseInt(result.main.temp) * 1.8) + 32;
      content.appendChild(temp)
    }
  })
}
export default getWeather