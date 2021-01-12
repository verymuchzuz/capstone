//updating the UI with the data from client
const updateUI = async (journey) => {
    try {
        const {coords, temperature, cityImg} = journey;

        //identify elements which need to be updated
        const results__section_city = document.getElementById("results__section_city");
        const results__section_temp = document.getElementById("results__section_temp");
        const results__section_image = document.getElementById("results__section_image");

        const desiredWidth = results__section_image.offsetWidth;

        //update the screen
        results__section_city.innerHTML = `Your destination is ${coords.city}`;
        results__section_temp.innerHTML = `Weather forecast is ${temperature}`;
        results__section_image.innerHTML = `<img src=\"${cityImg}\" width=\"${desiredWidth}\">`;

        //error-handling
    } catch (error) {
        console.log("Update UI error: ", error);
    }
}

export {updateUI}