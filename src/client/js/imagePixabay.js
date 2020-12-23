//this function will get the image from Pixabay - Zuzi happy
//we will add all data about our journey to this journey object
export let journey = {};

const pixApiKey = "19275411-e822d3731bb0962d259d26f2f";
const pixBaseUrl = "https://pixabay.com/api/?"

const imagePixabay = async (cityInput) => {
    console.log("Fetching from Pixabay");
    const pixFetch = await fetch(pixBaseUrl + pixApiKey +'&q=' + cityInput + '&image_type=photo')
    try {
        const getPixabayAPI = await pixFetch.json();
        const pixData = getPixabayAPI.hits[0];
        journey = pixData.largeImageURL;
        return pixData;

        //error-handling
    } catch(error) {
        console.log("Pixabay error: ", error)
    }
}

export {imagePixabay}