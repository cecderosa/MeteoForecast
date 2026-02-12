function refreshWeather1(response) {
  let temperatureElement1 = document.querySelector("#temperature1");
  let temperature1 = response.data.temperature.current;
 let cityElement1=document.querySelector("#city1");
  cityElement1.innerHTML= response.data.city;
  temperatureElement1.innerHTML = Math.round(temperature1);
}

function searchCity1(city1) {
let apiKey ="c7o85b9t9db5f04fdbe341094a1feefd";
let apiUrl1 = `https://api.shecodes.io/weather/v1/current?query=${city1}&key=${apiKey}&units=metric`;
console.log(apiUrl1);
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
  cityElement2.innerHTML= response.data.city;
  temperatureElement2.innerHTML = Math.round(temperature2);
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