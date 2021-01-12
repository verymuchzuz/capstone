const path = require("path");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static("dist"));
app.use(cors());

let journey = {};


const coordinatesGeonames = async (cityInput) => {
    const geoUsername = "zobalek";
    const completeGeoNamesUrl =
        `http://api.geonames.org/postalCodeSearchJSON?placename=${cityInput}&maxRows=10&username=${geoUsername}`

    console.log("Fetching Geonames");
    //fetch coordinates from Geonames based on city input from the user
    const getCoordinates = await fetch(completeGeoNamesUrl)
        .then((response) => {
            return response.json();
        }).then((geonamesData) => {
            //the coords attribute specifies the x and y coordinates of an area
            journey.coords = {
                lat: geonamesData.postalCodes[0].lat,
                lng: geonamesData.postalCodes[0].lng,
                city: geonamesData.postalCodes[0].placeName,
                countryCode: geonamesData.postalCodes[0].countryCode
            };
            //error-handling
        }).catch((error) => {
            console.log("Geonames error: ", error);
        });
}

const forecastWeatherbit = async (inputDate) => {
    const weatherUrlFuture = "https://api.weatherbit.io/v2.0/forecast/daily?lat=";
    const weatherUrlCurrent = "https://api.weatherbit.io/v2.0/current?lat=";
    const weatherApiKey = "cbc67f0272b74d02a4cb5889d6ac91f0";

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

    const weatherBit = await fetch(dateBasedForecastURL);
    try {
        const weatherData = await weatherBit.json();
        journey.temperature = weatherData.data[0].temp;
    } catch (e) {
        console.log(e);
    }
}

const imagePixabay = async (cityInput) => {
    const pixBaseUrl = "https://pixabay.com/api/?key=";
    const pixApiKey = "19275411-e822d3731bb0962d259d26f2f";

    console.log("Fetching from Pixabay");
    const pixFetch = await fetch(pixBaseUrl + pixApiKey +'&q=' + cityInput + '&image_type=photo');
    try {
        const getPixabayAPI = await pixFetch.json();
        const pixData = getPixabayAPI.hits[0];
        journey.cityImg = pixData.largeImageURL;

        //error-handling
    } catch(error) {
        console.log("Pixabay error: ", error)
    }
}

//Creating Routes
//GET - home
// app.get("/", (request, response) =>
//     response.sendFile("index.html", {root: 'src/client/views/'}));
app.get("/", (request, response) =>
    response.sendFile(path.resolve("dist/index.html")));

app.post("/geoWeather", async (request, response) => {
    try {
        const geoData = await coordinatesGeonames(request.body.cityInput).then(() => {
            console.log(journey);
        });
        const weatherData = await forecastWeatherbit(request.body.startDate).then(() => {
            console.log(journey);
        })
        const pixabayData = await imagePixabay(request.body.cityInput).then(() => {
            console.log(journey);
        });
        response.status(200).send(journey);
    } catch (error) {
        console.log(error);
        response.status(400).send(error);
    }
});


//POST
// app.post('/weatherbitForecast', async (request,response) => {
//
//     //check this url
//     const fetchWeatherForecast = await fetch(`${geonamesApi.baseUrl}&q=${city}&username=${geonamesApi.username}&style=${geonamesApi.style}`);
//     console.log("Fetching: ", fetchWeatherForecast);
//
//     const responseData = fetchWeatherForecast.json();
//     console.log("Response data: ", responseData);
//
//     const weatherbitData = {
//         current_temp: weatherData.data[0].temp
//     };
//
//     response.send(weatherbitData);
//     console.log("Weatherbit data: ", weatherbitData);
// });
//
//
//
// ////////// SERVER SIDE OF JAVASCRIPT FUNCTIONS THAT ARE IN CLIENT///////////////
//
// //POST - this request sends the details of our trip
// app.post("/mydestination", async (request, response) => {
//     try {
//         const weatherForecast = await fetchWeather(request.body.destinationCity);
//         const destinationPic = await fetchPixabay(request.body.destinationCity);
//         const travelDates = request.body.departureDate;
//         const journey = { ...weatherForecast, cityImgSrc: destinationPic, departureDate: travelDates };
//         console.log(journey);
//         response.status(200).send(journey);
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// });

module.exports = app;