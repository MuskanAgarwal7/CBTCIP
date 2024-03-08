const search = document.querySelector(".search")
const input = document.querySelector("input")
const cityName = document.querySelector(".cityName");
const date = document.querySelector(".date");
const region = document.querySelector(".region");
const country = document.querySelector(".country");
const temperature = document.querySelector(".temp");
const condition = document.querySelector(".condition");

(async () => {
    let URL = 'https://api.weatherapi.com/v1/current.json?key=4b21ade6922b44ce80791051242102&q=jhansi&aqi=no'
    let response = await fetch(URL);
    let data = await response.json();
    cityName.innerText = data.location.name;
    date.innerText = data.location.localtime;
    region.innerText = data.location.region;
    country.innerText = data.location.country;
    temperature.innerText = data.current.temp_c;
    condition.innerText = data.current.condition.text;
})();


async function weatherapi(city) {
    let url = `https://api.weatherapi.com/v1/current.json?key=4b21ade6922b44ce80791051242102&q=${city}&aqi=no`
    let response = await fetch(url);
    let data = await response.json();
    cityName.innerText = data.location.name;
    date.innerText = data.location.localtime;
    region.innerText = data.location.region;
    country.innerText = data.location.country;
    temperature.innerText = data.current.temp_c;
    condition.innerText = data.current.condition.text;
}

search.addEventListener("click", () => {
    weatherapi(input.value);
});
