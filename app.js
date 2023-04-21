// Import render function from lit-html
import {render} from './lit-html.js';

import { weatherTemplate } from './template.js';

// URL
const apiKey = '3ab6ab87bd8d1369f22e55a8768277e6';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button'); 
const wheatherCard = document.querySelector('.weather');

async function checkWeather(city) {
    let showError = false;
    let weatherIcon = '';

    try {
        // Fetches the weather data
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        // Error handling
        if(response.status !== 200 && response.status !== 400 && response.status !== 404) {
            const error = response;
            throw error;
        }
        const data = await response.json();

        if(response.status === 404|| response.status === 400 || searchBox.value == '') {
            showError = true;
        } else{
            // Check the given conditions
            const condition = data.weather[0].main;
            if(condition == 'Clouds'){
                weatherIcon = 'images/clouds.png';
            } else if(condition == 'rain') {
                weatherIcon = 'images/rain.png';
            } else if(condition == 'Clear') {
                weatherIcon = 'images/clear.png';
            } else if(condition == 'Mist') {
                weatherIcon = 'images/misty.png';
            } else if(condition == 'Drizzle') {
                weatherIcon = 'images/drizzle.png';
            } else if(condition == 'Snow') {
                weatherIcon = 'images/snow.png';
            }
        }
        // Render the dynamic content
        render(weatherTemplate(data, weatherIcon, showError), wheatherCard);
        
    } catch (error) {
        alert(error.message);
    }
}
// Add event listener
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
    