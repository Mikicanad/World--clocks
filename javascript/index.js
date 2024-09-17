function updateTime() {
let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");


newYorkDateElement.innerHTML = moment().format("MMMM Do YYYY");
newYorkTimeElement.innerHTML =newYorkTime.format("h:mm:ss [<small>]A[</small>]");


let torontoElement = document.querySelector("#toronto");
let torontoDateElement = torontoElement.querySelector(".date");
let torontoTimeElement = torontoElement.querySelector(".time");
let torontoTime = moment().tz("America/Toronto");

torontoDateElement.innerHTML = moment().format("MMMM Do YYYY");
torontoTimeElement.innerHTML =torontoTime.format("h:mm:ss [<small>]A[</small>]");

let japanElement = document.querySelector("#japan");
let japanDateElement = japanElement.querySelector(".date");
let japanTimeElement = japanElement.querySelector(".time");
let japanTime = moment().tz("Asia/Tokyo");

japanDateElement.innerHTML = moment().format("MMMM Do YYYY");
japanTimeElement.innerHTML =japanTime.format("h:mm:ss [<small>]A[</small>]");

let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = moment().format("MMMM Do YYYY");
parisTimeElement.innerHTML =parisTime.format("h:mm:ss [<small>]A[</small>]");

}

updateTime();
setInterval(updateTime, 1000);
