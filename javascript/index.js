function updateTime() {
let newYorkElement = document.querySelector("#new-york");
if(newYorkElement) {
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");


newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
newYorkTimeElement.innerHTML =newYorkTime.format("h:mm:ss [<small>]A[</small>]");
}

let vancouverElement = document.querySelector("#vancouver");
if(vancouverElement) {
let vancouverDateElement = vancouverElement.querySelector(".date");
let vancouverTimeElement = vancouverElement.querySelector(".time");
let vancouverTime = moment().tz("America/Vancouver");

vancouverDateElement.innerHTML = vancouverTime.format("MMMM Do YYYY");
vancouverTimeElement.innerHTML =vancouverTime.format("h:mm:ss [<small>]A[</small>]");
}

let tokyoElement = document.querySelector("#tokyo");
if(tokyoElement) {
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML =tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}

let parisElement = document.querySelector("#paris");
if(parisElement) {
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML =parisTime.format("h:mm:ss [<small>]A[</small>]");
}



}
let cityInterval;

function updateCity(event) {
    clearInterval(cityInterval);
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  function updateCityTime() {
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="index.html">🌏 All Cities</a>
  `;

}

updateCityTime(); 
  cityInterval = setInterval(updateCityTime, 1000);
  }

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);