//updating the UI with the data from client
export let journey = {};

const updateUI = async journey => {
    console.log('Updating UI: ', journey);

    try {
        const {cityInput, dataFromWeatherbit, pixData} = journey;

        //identify elements which need to be updated
        const results__section_city = document.getElementById("results__section_city");
        const results__section_temp = document.getElementById("results__section_temp");
        const results__section_image = document.getElementById("results__section_image");

        //update the screen
        results__section_city.innerHTML = `Your destination is ${cityInput}`;
        results__section_temp.innerHTML = `Weather forecast is ${dataFromWeatherbit}`;
        results__section_image.innerHTML = `${pixData}`;

        //error-handling
    } catch (error) {
        console.log("Update UI error: ", error);
    }
}

export {updateUI}