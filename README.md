Weather App

Try it out! - https://weather-app-z.github.io/

This repository contains a simple weather app that allows you to check the weather for a specific city. The app is built using lit-html for rendering dynamic content.

Prerequisites

    A valid API key from OpenWeatherMap.
    Node.js and npm installed on your machine.

Getting Started

    Clone this repository to your local machine.
    Navigate to the project directory.
    Install the required dependencies by running npm install.
    Replace apiKey variable in app.js with your own OpenWeatherMap API key.
    Open index.html in your web browser.

Usage

    Enter the name of a city in the search box.
    Click the search button.
    The weather data for the specified city will be displayed, including the temperature, weather condition, and an icon representing the weather condition.

Code Overview

    app.js contains the main application logic, including fetching the weather data from the OpenWeatherMap API and rendering the dynamic content using lit-html.
    template.js contains the lit-html template used to render the weather data.
    lit-html.js is a third-party library used for rendering dynamic content.
