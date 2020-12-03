//this function will get the coordinates from Geonames - ZUZ happy
//we will add all data about our journey to this journey object
export let journey = {};

const geoUrl = "http://api.geonames.org/postalCodeSearchJSON?placename=";
const geoUsername = "&maxRows=1&username=zobalek";

//
const coordinatesGeonames = async (cityInput) => {
    console.log("Fetching Geonames");
    //fetch coordinates from Geonames based on city input from the user
    const getCoordinates = await fetch(geoUrl + cityInput + geoUsername)
        .then((res) => {
            return res.json();
        }).then((geonamesData) => {
            const coordinatesData = {
                lat: geonamesData.postalCodes[0].lat,
                lng: geonamesData.postalCodes[0].lng,
                city: geonamesData.postalCodes[0].placeName,
                countryName: geonamesData.postalCodes[0].countryName
            }

            //the coords attribute specifies the x and y coordinates of an area
            journey.coords = coordinatesData;

            //error-handling
        }).catch((error) => {
            console.log("Geonames error: ", error);
        });

    console.log(journey);
}

export {coordinatesGeonames}