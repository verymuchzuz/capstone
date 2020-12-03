// This file contains the imports of all functions and styles

import { handleSubmit } from './js/handleSubmit'
import { forecastWeatherbit } from './js/forecastWeatherbit'
import { imagePixabay } from "./js/imagePixabay";
import { coordinatesGeonames } from "./js/coordinatesGeonames";
import { updateUI } from "./js/updateUI"

import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/resets.scss";

export {
    handleSubmit,
    forecastWeatherbit,
    imagePixabay,
    coordinatesGeonames,
    updateUI
}

console.log(handleSubmit);
console.log(forecastWeatherbit);
console.log(imagePixabay);
console.log(coordinatesGeonames);
console.log(updateUI);