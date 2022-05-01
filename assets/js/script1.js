
var APIKey = "f0a8b5d1b019233b3dd559fd1eba0c60"
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";
var outPutEl = document.querySelector('.city-container')
src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";



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

console.log("testing")
/*
var fiveDayURL;
$.ajax({
    url: fiveDayURL,
    method: "GET",
  }).then(function (responseForecast) {
    console.log(responseForecast);
    for (i = 0; i < 5; i++) {
      console.log(i * 8 + 4);
      var date = responseForecast.list[i * 8 + 4].dt_txt;
      var dateSplit = date.split(" ", 1)[0];
      var dateSplit2 = dateSplit.split("-");
      console.log(dateSplit2);

      var finalDate = dateSplit2[1] + "/" + dateSplit2[2] + "/" + dateSplit2[0];
      var newCard = $("<div>").attr("class", "card");
      newCard.append("<div class='card-body'>");
      newCard.append(
        "<h5 class='card-title' id = 'cardHead'>" + finalDate + "</h5>"
      );
      var imgDiv = $(
        "<div id = 'icon'><img id='wicon' src='https://openweathermap.org/img/w/" +
          responseForecast.list[i * 8 + 4].weather[0].icon +
          ".png' alt = 'weather icon'></div>"
      );
      newCard.append(imgDiv);
      var newCardTemp =
        (responseForecast.list[i * 8 + 4].main.temp - 273) * (9 / 5) + 32;
      newCard.append(
        "<div>Temp: " + newCardTemp.toFixed(1) + " &#176" + "F</div>"
      );
      newCard.append(
        "<div>Humidity: " +
          responseForecast.list[i * 8 + 4].main.humidity +
          "%</h5>"
      );
      $("#fiveDay").append(newCard);
    });
}*/