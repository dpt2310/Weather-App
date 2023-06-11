function displayTemperature(response) {
  let temperatureElement = document.querySelector("temperature");
  let cityElement = document.querySelector("city");
  let descriptionElement = document.querySelector("description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.wind.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed * 3.6);
}

let apiKey = "894e138c2b76b790b5e762ad5f9bcd4c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
