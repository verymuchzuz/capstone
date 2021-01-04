//handling all the function to submit the form

import {coordinatesGeonames} from "./coordinatesGeonames";
import {forecastWeatherbit} from "./forecastWeatherbit";
import {imagePixabay} from "./imagePixabay"
import {updateUI, journey} from "./updateUI";


function handleSubmit(event) {
    event.preventDefault()
    coordinatesGeonames(destination)
        .then(() => forecastWeatherbit(date))
        .then(() => imagePixabay(cityInput))
        .then(() => updateUI(journey));
}

export {handleSubmit}