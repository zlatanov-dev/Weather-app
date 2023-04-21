// Import html function from lit-html
import { html } from "./lit-html.js";

// Dynamic content
export const weatherTemplate = (
  data,
  weatherIcon,
  showError
) => html` ${showError
  ? html` <div class="error">
      <p>Invalid city name</p>
    </div>`
  : html` <img src=${weatherIcon} class="weather-icon" />
      <h1 class="temp">${Math.round(data.main.temp)}°C</h1>
      <h2 class="city">${data.name}</h2>
      <div class="details">
        <div class="col" >
          <img src= "images/humidity.png" alt="" />
          <div>
            <p class="humidity">${data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div class="col" id="wind">
          <img src="images/wind.png" alt="" />
          <div>
            <p class="wind">${Math.round(data.wind.speed)} km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>`}`;
