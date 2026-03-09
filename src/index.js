function refreshWeather1(response) {
  let temperatureElement1 = document.querySelector("#temperature1");
  let temperature1 = response.data.temperature.current;
 let cityElement1=document.querySelector("#city1");
 let descriptionElement1= document.querySelector("#description1");
 let humidityElement1= document.querySelector("#humidityone");
 let windSpeedElement1= document.querySelector("#windSpeedone");
 let timeElement1= document.querySelector("#time1"); 
let date1 = new Date(response.data.time * 1000);
 let iconElement1 = document.querySelector("#icon1");



  temperatureElement1.innerHTML = `${Math.round(temperature1)}°C`;
  cityElement1.innerHTML= response.data.city;
  timeElement1.innerHTML = formatDate1(date1);
  descriptionElement1.innerHTML = response.data.condition.description;
  humidityElement1.innerHTML= response.data.temperature.humidity;
  windSpeedElement1.innerHTML= response.data.wind.speed;
iconElement1.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;

getForecast1(response.data.city);

}

function formatDate1(date1) {
 let minutes = date1.getMinutes();
  let hours = date1.getHours();
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = days[date1.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
  }

  

function searchCity1(city1) {
let apiKey ="c7o85b9t9db5f04fdbe341094a1feefd";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city1}&key=${apiKey}&units=metric`;;
axios.get(apiUrl).then(refreshWeather1);
}
 function handleSearchSubmit1(event) {
    event.preventDefault();
    let searchInput1 = document.querySelector("#search-form-input-1");
 
  searchCity1(searchInput1.value);

} 
function refreshWeather2(response) {
 let temperatureElement2 = document.querySelector("#temperature2");
  let temperature2 = response.data.temperature.current;
 let cityElement2=document.querySelector("#city2");
  let descriptionElement2= document.querySelector("#description2");
 let humidityElement2= document.querySelector("#humiditytwo");
let windSpeedElement2= document.querySelector("#windSpeedtwo");
 let timeElement2= document.querySelector("#time2"); 
let date2 = new Date(response.data.time * 1000);
 let iconElement2 = document.querySelector("#icon2");


  cityElement2.innerHTML= response.data.city;
   timeElement2.innerHTML= formatDate2(date2);
  descriptionElement2.innerHTML = response.data.condition.description;
   humidityElement2.innerHTML= response.data.temperature.humidity;
      windSpeedElement2.innerHTML= response.data.wind.speed;
  temperatureElement2.innerHTML = `${Math.round(temperature2)}°C`;
iconElement2.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
getForecast2(response.data.city);
}

function formatDate2(date2) {
  let minutes = date2.getMinutes();
  let hours = date2.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date2.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
} 

function searchCity2(city2) {
let apiKey ="c7o85b9t9db5f04fdbe341094a1feefd";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city2}&key=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(refreshWeather2);
}


function handleSearchSubmit2(event) {
    event.preventDefault();

   let searchInput2 = document.querySelector("#search-form-input-2");

  searchCity2(searchInput2.value);
}

function formatDay(timestamp)  {
  let date = new Date(timestamp*1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return days[date.getDay()];
}

function getForecast1(city) {
let apiKey = "c7o85b9t9db5f04fdbe341094a1feefd";
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(displayForecast1);
}



function displayForecast1(response) {
console.log(response.data);
let days1=["Tue", "Wed", "Thu"];
 let forecast1Html= "";

response.data.daily.slice(1, 4).forEach(function (day) {
  forecast1Html=
  forecast1Html +
`<div class="weather-forecast-day-1"> 
            <div class="weather-forecast-date" >${formatDay(day.time)}</div> 
            <div class="weather-forecast-icon"><img src="${day.condition.icon_url}"></div>
            <div class="weather-forecast-temperatures"> 
              <div class="weather-forecast-temperature"> <strong>${Math.round(day.temperature.maximum)}°C</strong> </div> 
            <div class="weather-forecast-temperature">${Math.round(day.temperature.minimum)}°C</div>    </div>
          </div>`
          ;

}); 

let forecast1Element= document.querySelector("#forecast1");
if (forecast1Element) {
  forecast1Element.innerHTML = forecast1Html;
}
}

function getForecast2(city) {
let apiKey = "c7o85b9t9db5f04fdbe341094a1feefd";
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(displayForecast2);
} 


function displayForecast2 (response) {
 console.log(response.data);

 let days2 =["Tue", "Wed", "Thu"];
 let forecast2Html= "";

response.data.daily.slice(1, 4).forEach(function (day) {
  forecast2Html =
  forecast2Html + 
 ` <div class="weather-forecast-day-1"> 
            <div class="weather-forecast-date" >${formatDay(day.time)}</div> 
            <div class="weather-forecast-icon"><img src="${day.condition.icon_url}"> </div>
            <div class="weather-forecast-temperatures"> 
              <div class="weather-forecast-temperature"> <strong>${Math.round(day.temperature.maximum)}°C</strong> </div> 
            <div class="weather-forecast-temperature">${Math.round(day.temperature.minimum)}°C</div>    </div>
          </div>`
          ; 
}); 
let forecast2Element= document.querySelector("#forecast2");
if (forecast2Element) {
  forecast2Element.innerHTML = forecast2Html;
}
}






          let searchFormElement1 = document.querySelector("#search-form-1");
searchFormElement1.addEventListener("submit", handleSearchSubmit1);

let searchFormElement2 = document.querySelector("#search-form-2");
searchFormElement2.addEventListener("submit", handleSearchSubmit2);


