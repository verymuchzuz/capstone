//this function will get the forecast from Weatherbit
// First need to figure out if we need to use current or future url from Weatherbit, then do POST request
import {updateUI} from "./app";

export let journey = {};

const weatherUrlFuture = "https://api.weatherbit.io/v2.0/forecast/daily?lat=";
const weatherUrlCurrent = "https://api.weatherbit.io/v2.0/current?lat=";
const weatherApiKey = "cbc67f0272b74d02a4cb5889d6ac91f0";


const forecastWeatherbit = async (inputDate) => {

    //1. define variables needed in the url function
    //dates
    const inputDateUser = new Date(inputDate).getTime();
    const todayDate = new Date().getTime();
    const deltaDates = (inputDateUser - todayDate) / (1000 * 3600 * 24);

    //coordinates
    const latCoords = journey.coords.lat;
    const lngCoords = journey.coords.lng;

    //2. figure out if the input date is under 7 days and based on that choose the correct weather forecast - i.e. current or future
    let dateBasedForecastURL = '';
    if (deltaDates > 7) {
        dateBasedForecastURL = weatherUrlFuture + latCoords + '&lon=' + lngCoords + '&key=' + weatherApiKey;
    } else {
        dateBasedForecastURL = weatherUrlCurrent + latCoords + '&lon=' + lngCoords + '&key=' + weatherApiKey;
    }

    //3. make a POST request
    const postRequest = async (url = '') => {
        const response = await fetch('http://localhost:3003/mydestination', {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: dateBasedForecastURL})
        });
        try {
            const requestData = response.json();
            requestData.then((dataFromWeatherbit) => {
                //add Weatherbit info to our journey object
                journey.forecastData = dataFromWeatherbit;
                //add delta to our journey object
                journey.dates = deltaDates;
                updateUI(requestData);
                return requestData;
                //error-handling
            })
        } catch (error) {
            console.log("Post request/Weatherbit error: ", error);
        }
    }
}

export {forecastWeatherbit}