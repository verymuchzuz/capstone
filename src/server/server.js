//Setup dotenv config
// const dotenv = require("dotenv");
// dotenv.config();

// Setup empty JS object to act as endpoint for all routes
projectData = {};

const fetch = require('node-fetch');

// Require Express to run server and routes + start up an instance of app
const express = require('express');
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// Setup Server + spin up the server + debug callback
const port = 3003;
const server = app.listen(port, listening);
function listening() {
    console.log(`Running on localhost: ${port}`);
};

//Creating Routes


//GET - home
// app.get('/', function (request, response) {
//     response.sendFile(path.join(__dirname, 'dist', 'index.html'))
// })
app.get("/", (request, response) => response.sendFile("index.html"));


//POST
app.post('/weatherbitForecast', async (request,response) => {

    //check this url
    const fetchWeatherForecast = await fetch(`${geonamesApi.baseUrl}&q=${city}&username=${geonamesApi.username}&style=${geonamesApi.style}`);
    console.log("Fetching: ", fetchWeatherForecast);

    const responseData = fetchWeatherForecast.json();
    console.log("Response data: ", responseData);

    const weatherbitData = {
        current_temp: weatherData.data[0].temp
    };

    response.send(weatherbitData);
    console.log("Weatherbit data: ", weatherbitData);
});



////////// SERVER SIDE OF JAVASCRIPT FUNCTIONS THAT ARE IN CLIENT///////////////

//GET - Homepage
app.get("/", (request, response) => {
    response.sendFile(path.resolve("dist/index.html"));
});

//POST - this request sends the details of our trip
app.post("/mydestination", async (request, response) => {
    try {
        const weatherForecast = await fetchWeather(request.body.destinationCity);
        const destinationPic = await fetchPixabay(request.body.destinationCity);
        const travelDates = request.body.departureDate;
        const journey = { ...weatherForecast, cityImgSrc: destinationPic, departureDate: travelDates };
        console.log(journey);
        response.status(200).send(journey);
    } catch (error) {
        console.log("Error: ", error);
    }
});