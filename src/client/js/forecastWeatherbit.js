//this function will get the forecast from Weatherbit
const weatherUrl = "https://api.weatherbit.io/v2.0/history/daily?";
const weatherApiKey = cbc67f0272b74d02a4cb5889d6ac91f0;

export let journey = {};


const forecastWeatherbit = async (url, cityInput, apiKey) => {
    const response = await fetch(weatherUrl + cityInput + weatherApiKey);
    try {
        const weatherResponse = await response.json();
        console.log(weatherResponse);
        Client.postData('/weatherbitForecast',
            {
                day1: weatherResponse.data[0].temp,
                day2: weatherResponse.data[1].temp,
                day3: weatherResponse.data[2].temp,
                day4: weatherResponse.data[3].temp,
                day5: weatherResponse.data[4].temp,
            }).then(response => {
            document.getElementById('day1').innerHTML = weatherResponse.data[0].temp;
            document.getElementById('day2').innerHTML = weatherResponse.data[1].temp;
            document.getElementById('day3').innerHTML = weatherResponse.data[2].temp;
            document.getElementById('day4').innerHTML = weatherResponse.data[3].temp;
            document.getElementById('day5').innerHTML = weatherResponse.data[4].temp;
        })
        return weatherResponse;
        //error-handling
    } catch (error) {
        console.log("Weatherbit error: ", error)
    }
}

export {forecastWeatherbit}