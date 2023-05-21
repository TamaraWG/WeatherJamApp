function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
}
let apiKey = "0f77edb1aff98694c739634ccdcf1f06";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&apiKey=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
