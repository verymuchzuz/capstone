//handling all the function to submit the form

import {coordinatesGeonames} from "./coordinatesGeonames";
import {forecastWeatherbit} from "./forecastWeatherbit";
import {imagePixabay} from "./imagePixabay"
import {updateUI, journey} from "./updateUI";


function handleSubmit(event) {
    event.preventDefault()

    const destination = document.getElementById("user_input_destination").value;
    const date = document.getElementById("start_date").value;
    const cityInput = document.getElementById("end_date").value;


    coordinatesGeonames(destination)
        .then(() => forecastWeatherbit(date))
        .then(() => imagePixabay(cityInput))
        .then(() => updateUI(journey));
}

export {handleSubmit}