function updateTime() {
let newYorkElement = document.querySelector("#new-york");
if (newYorkElement) {
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");


newYorkDateElement.innerHTML = moment().format("MMMM Do YYYY");
newYorkTimeElement.innerHTML =newYorkTime.format("h:mm:ss [<small>]A[</small>]");
}

let torontoElement = document.querySelector("#toronto");
if (torontoElement) {
let torontoDateElement = torontoElement.querySelector(".date");
let torontoTimeElement = torontoElement.querySelector(".time");
let torontoTime = moment().tz("America/Toronto");

torontoDateElement.innerHTML = moment().format("MMMM Do YYYY");
torontoTimeElement.innerHTML =torontoTime.format("h:mm:ss [<small>]A[</small>]");
}

}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city" id="new-york">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
        <div class="time">${cityTime.format("hh:mm:ss")}<small>${cityTime.format("A")}</small></div>
</div>
`;

}

updateTime();
setInterval(updateTime, 1000);


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);