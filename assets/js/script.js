/*var APIKey = "f0a8b5d1b019233b3dd559fd1eba0c60"
var city;
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
const iconEl = document.querySelector('#icon')
const cityNameEl = document.querySelector('#city-name')
const temperatureEl = document.querySelector('#temperature')
const windSpeedEl = document.querySelector('#wind-speed')
const humidityEl = document.querySelector('#humidity')
const UVindexEl = document.querySelector('#UV-index')
localStorage.setItem()

async function getData() {
    var response = await fetch(url, options)
    var data = await response.json();
    data.data.forEach(item => {
        outPutEl.innerHTML += item.firstName 
    });
}
getData()


const init = () => {
    document.getElementById('search-button').addEventListener('click', fetchWeather);
    document.getElementById('search-button').addEventListener('keydown', function(event){
        if (event.key === "Enter") {
            fetchWeather ();
        }
    })
}


const fetchWeather = () => {
    city = document.getElementById("city-input").value;
    console.log(city)
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";
    fetch(queryURL)
    .then(resp => {
        return resp.json();
    })
    .then(data => {
        console.log(data)
        showWeather(data);
    })
    .catch(console.err);
}

// var iconCode = data.list[i].weather[0].icon
// var iconURL = `http://openweathermap.org/img/w/` + iconCode + `.png`

const showWeather = (resp) => {
    console.log(resp);
    let row = document.querySelector('.forecast-row');   
    cityNameEl.textContent = city;
    temperatureEl.textContent = "Temperature: " + resp.main.temp + " F";
    windSpeedEl.textContent = "Wind Speed: " + resp.wind.speed + " MPH";
    humidityEl.textContent = "Humidity: " + resp.main.humidity + " %"; }
    UVindexEl.textContent = resp.main.
    
    //five day forecast
    var fiveDayURL = "api.openweathermap.org/data/2.5/forecast?lat=" + resp.coord.lat  + "&lon=" + resp.coord.lon  + "&appid=" + APIKey
    fetch (fiveDayURL)
    .then(resp => {
        return resp.json();
    })
    .then(data => {
        console.log(data)
        showFiveDay(data);
    })
    .catch(console.err);
}

function showFiveDay

init();

var fiveDayForecast = document.createElement("h2");
var src = document.getElementById("forecast-text");
src.appendChild(fiveDayForecast)
fiveDayForecast.innerHTML = '5-Day Forecast'
fiveDayForecast.setAttribute("style", "padding: 0px 15px")
//Need to apply display inline-flex
fiveDayForecast.classList.add('d-inline-flex');
*/