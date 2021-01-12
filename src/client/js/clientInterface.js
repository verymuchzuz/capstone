const geoWeatherClient = async (cityInput, startDate, endDate) => {
    let data = { cityInput, startDate, endDate };

    return await Client.postRequest("http://localhost:3143/geoWeather", data);
};

export { geoWeatherClient }