//var APIKey = "f0a8b5d1b019233b3dd559fd1eba0c60"
//var city;
// let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
// const iconEl = document.querySelector('#icon')
// const cityNameEl = document.querySelector('#city-name')
// const temperatureEl = document.querySelector('#temperature')
// const windSpeedEl = document.querySelector('#wind-speed')
// const humidityEl = document.querySelector('#humidity')
// const UVindexEl = document.querySelector('#UV-index')
//var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";

var APIKey = "f0a8b5d1b019233b3dd559fd1eba0c60"
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";
var outPutEl = document.querySelector('.city-container')

// async function getWeatherData() {
//     var response = await fetch(queryURL, APIKey)
//     var data = await response.json();
//     data.main.forEach(item => {
//         outPutEl.innerHTML = item.temperature
//     });
// }

// getWeatherData();

var APIKey = "f0a8b5d1b019233b3dd559fd1eba0c60"
var city;
var outPutEl = document.querySelector('.city-container')
//var todayDate = moment().format('MM/DD/YYYY');
//var formatDate= 1399919400000;
//var responseDate = moment().format('MM/DD/YYYY');

var btnEl = document.querySelector("#search-button")
async function getWeatherData() {
var sQuery = document.querySelector('#city-input').value
var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${sQuery}&appid=` + APIKey + "&units=imperial";
var resp = await fetch(queryURL)
console.log(resp)
var data = await resp.json()
console.log(data)
//data.array.forEach(item => {
    var divEl = document.createElement('div')
    divEl.innerHTML = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h3 class="card-title">${data.name}</h3>
          <h5 class="card-title"></h5>
          <p class="card-text">Temperature: ${data.main.temp + "&#176;"}</p>
          <p class="card-text">Wind Speed: ${data.wind.speed + " MPH"}</p>
          <p class="card-text">Humidity: ${data.main.humidity + "%"}</p>
        </div>
      </div>`
        outPutEl.appendChild(divEl);

      //divEl.innerHTML.moment().format('MM/DD/YYYY');

//});

}



btnEl.addEventListener('click', getWeatherData);
btnEl.addEventListener('click', getForecast);

console.log("testing")