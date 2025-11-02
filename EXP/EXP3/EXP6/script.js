const apiKey = "15834bc7e1d225d95c3ff5e6d31bf960";  // your personal OpenWeatherMap key
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherInfo = document.getElementById("weatherInfo");
const error = document.getElementById("error");

async function getWeather(city) {
  try {
    error.textContent = "";
    weatherInfo.textContent = "Fetching weather data...";

    const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    weatherInfo.innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>☁️ Condition: ${data.weather[0].description}</p>
      <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
      <p>🌍 Country: ${data.sys.country}</p>
    `;

    // Save last searched city
    localStorage.setItem("lastCity", city);
  } catch (err) {
    weatherInfo.textContent = "";
    error.textContent = "❌ " + err.message;
  }
}

// Handle button click
getWeatherBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) getWeather(city);
  else error.textContent = "Please enter a city name!";
});

// Load last searched city
window.addEventListener("load", () => {
  const lastCity = localStorage.getItem("lastCity");
  if (lastCity) {
    cityInput.value = lastCity;
    getWeather(lastCity);
  }
});
