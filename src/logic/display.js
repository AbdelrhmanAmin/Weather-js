
const display = (result) => {
  const content = document.querySelector('#content');
  const name = document.createElement('h2');
  const div = document.createElement('div');
  const temp = document.createElement('strong');
  const img = document.createElement('img');
  name.innerHTML = result.name;
  temp.innerHTML = parseInt(result.main.temp);
  temp.style.cssText = 'font-size:30px; margin-right: 5px; font-weight:500'
  div.style.cssText = 'display: flex; align-items:center'
  img.src=`https://www.countryflags.io/${result.sys.country}/shiny/32.png`
  content.appendChild(name)
  div.appendChild(temp)
  div.appendChild(img)
  content.appendChild(div)

}

export default display

