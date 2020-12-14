//handling all the function to submit the form

import {coordinatesGeonames, journey} from "./coordinatesGeonames";
import {forecastWeatherbit, journey} from "./forecastWeatherbit";
import {imagePixabay, journey} from "./imagePixabay"
import {updateUI, journey} from "./updateUI";


function handleSubmit(event) {
    event.preventDefault()
    coordinatesGeonames(destination)
        .then(() => forecastWeatherbit(date))
        .then(() => imagePixabay(cityInput))
        .then(() => updateUI(journey));
}

export {handleSubmit}