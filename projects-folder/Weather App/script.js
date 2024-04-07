const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const locationElement = document.getElementById('location');
const weatherElement = document.getElementById('weather');

const apiKey = '4f2c074d4ce3a87096e0e7891bd891b3'; // Replace with your API key

searchButton.addEventListener('click', () => {
    const location = searchInput.value;
    fetchWeather(location);
});

function fetchWeather(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherElement.innerHTML = 'Error fetching weather data';
        });
}

function displayWeather(data) {
    const location = data.name + ', ' + data.sys.country;
    const temperature = data.main.temp + '°C';
    const description = data.weather[0].description;

    locationElement.textContent = location;
    weatherElement.innerHTML = `<p>Temperature: ${temperature}</p>
                                <p>Description: ${description}</p>`;
}
