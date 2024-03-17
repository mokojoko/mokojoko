document.addEventListener('DOMContentLoaded', function () {
    fetchWeather();
});

function fetchWeather() {
    const apiKey = '9a1bb86e5dabd15a6d9dd3bb37dabf2c';
    const city = 'Pontarlier';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=fr&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;

            const weatherHTML = `
                <p>Température actuelle: ${temperature}°C</p>
                <p>Description: ${description}</p>
                <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
            `;
            weatherInfo.innerHTML = weatherHTML;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = '<p>Erreur lors de la récupération des données météorologiques.</p>';
        });
}
