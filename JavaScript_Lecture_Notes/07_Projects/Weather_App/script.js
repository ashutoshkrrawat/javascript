const url = "https://api.weatherstack.com/current";
const API_KEY = "767048843f784cfe7f8a3c517c17d05a"; //here goes API key

const submitBtn = document.querySelector("#search-btn");
const container = document.querySelector("#weather-container");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const location = document.querySelector("#city-input").value.trim();

  const finalUrl = `${url}?access_key=${API_KEY}&query=${location}`;

  async function getWeather() {
    try {
      const response = await fetch(finalUrl);
      const data = await response.json();

      if (data.success == false) {
        throw new Error("Kindly eneter a valid city!");
      }

      showWeather(data);
    } catch (error) {
      alert(error.message);
    }
  }

  getWeather();
});

function showWeather(data) {
  container.innerHTML = `<h2>${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temperature}°C</p>
        <p>Weather: ${data.current.weather_descriptions[0]}</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind Speed: ${data.current.wind_speed} m/s</p>`;
}
