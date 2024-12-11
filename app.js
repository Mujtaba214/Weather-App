const API_KEY = `803fa4fa67a8d78bf34e08ba6ebb91b4`;
const input = document.getElementById("input");

const showWeather = document.getElementById("showWeather")

const searchData = async () => {
    showWeather.innerHTML = `
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    `
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}&units=metric`;
    const fetchData = await fetch(API_URL);
    const response = await fetchData.json();
    console.log(response);
    return showData(response);
}

const showData = (data) => {
    if (data.cod== '404')
    {
        showWeather.innerHTML = `City not found ...!!`;
        return
    }
    else{
    showWeather.innerHTML = `
        <img width="80" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        <h2>Temperature: ${data.main.temp}C</h2>
        <h2>Feels Like: ${data.main.feels_like}C</h2>
        <h2>Temperature Max: ${data.main.temp_max}C</h2>
        <h2>Temperature Min: ${data.main.temp_min}C</h2>
        <h2>Weather Type: ${data.weather[0].main}</h2>
        <h2>Wind Speed: ${data.wind.speed}</h2>  
        <h2>Longitude: ${data.coord.lon}</h2>  
        <h2>Latitude: ${data.coord.lat}</h2>  
    `
    }
}