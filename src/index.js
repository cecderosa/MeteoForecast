function refreshWeather1(response) {
  let temperatureElement1 = document.querySelector("#temperature1");
  let temperature1 = response.data.temperature.current;
 let cityElement1=document.querySelector("#city1");
 let descriptionElement1= document.querySelector("#description1");
 let humidityElement1= document.querySelector("#humidityone");
 let windSpeedElement1= document.querySelector("#windSpeedone");
 let timeElement1= document.querySelector("#time1"); 
let date1 = new Date(response.data.time * 1000);




  temperatureElement1.innerHTML = `${Math.round(temperature1)}°C`;
  cityElement1.innerHTML= response.data.city;
  timeElement1.innerHTML = formatDate1(date1);
  descriptionElement1.innerHTML = response.data.condition.description;
  humidityElement1.innerHTML= response.data.temperature.humidity;
  windSpeedElement1.innerHTML= response.data.wind.speed;



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
let apiUrl1 = `https://api.shecodes.io/weather/v1/current?query=${city1}&key=${apiKey}&units=metric`;
axios.get(apiUrl1).then(refreshWeather1);
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



  cityElement2.innerHTML= response.data.city;
   timeElement2.innerHTML= formatDate2(date2);
  descriptionElement2.innerHTML = response.data.condition.description;
   humidityElement2.innerHTML= response.data.temperature.humidity;
      windSpeedElement2.innerHTML= response.data.wind.speed;
  temperatureElement2.innerHTML = `${Math.round(temperature2)}°C`;

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
let apiUrl2 = `https://api.shecodes.io/weather/v1/current?query=${city2}&key=${apiKey}&units=metric`;
console.log(apiUrl2);
axios.get(apiUrl2).then(refreshWeather2);
}


function handleSearchSubmit2(event) {
    event.preventDefault();

   let searchInput2 = document.querySelector("#search-form-input-2");

  searchCity2(searchInput2.value);
}

let searchFormElement1 = document.querySelector("#search-form-1");
searchFormElement1.addEventListener("submit", handleSearchSubmit1);

let searchFormElement2 = document.querySelector("#search-form-2");
searchFormElement2.addEventListener("submit", handleSearchSubmit2);