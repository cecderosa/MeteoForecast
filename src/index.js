function handleSearchSubmit1(event) {
    event.preventDefault();
    let searchInput1 = document.querySelector("#search-form-input-1");
  let cityElement1=document.querySelector("#city1");
  cityElement1.innerHTML= searchInput1.value;

}

function handleSearchSubmit2(event) {
    event.preventDefault();

   let searchInput2 = document.querySelector("#search-form-input-2");
  let cityElement2=document.querySelector("#city2");
  cityElement2.innerHTML= searchInput2.value;
}

let searchFormElement1 = document.querySelector("#search-form-1");
searchFormElement1.addEventListener("submit", handleSearchSubmit1);

let searchFormElement2 = document.querySelector("#search-form-2");
searchFormElement2.addEventListener("submit", handleSearchSubmit2);