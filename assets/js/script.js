var fiveDayForecast = document.createElement("h2");
//img.src = "http://public.media.smithsonianmag.com/legacy_blog/smiley-face-1.jpg";
var src = document.getElementById("forecast-text");
src.appendChild(fiveDayForecast)
fiveDayForecast.innerHTML = '5-Day Forecast'
fiveDayForecast.setAttribute("style", "padding: 0px 15px")