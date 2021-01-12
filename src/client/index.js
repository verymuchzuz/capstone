// This file contains the imports of all functions and styles

// This file contains the imports of all functions and styles

import { handleSubmit } from './js/handleSubmit';
import { geoWeatherClient } from "./js/clientInterface";
import { updateUI } from "./js/updateUI";
import { postRequest } from "./js/postRequest";

import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/resets.scss";

export {
    handleSubmit,
    geoWeatherClient,
    updateUI,
    postRequest
}