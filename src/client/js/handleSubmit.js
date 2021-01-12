//handling all the function to submit the form

import {geoWeatherClient} from "./clientInterface";
import {updateUI} from "./updateUI";

let journey = {};

function handleSubmit(event) {
    event.preventDefault()

    const destination = document.getElementById("user_input_destination").value;
    const startDate = document.getElementById("start_date").value;
    const endDate = document.getElementById("end_date").value;

    geoWeatherClient(destination, startDate, endDate).then((response) => {
        updateUI(response);
    })
}

export {handleSubmit}