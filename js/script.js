const apis = {
    key: `URkMv8qNAL1ettx3XUnfAsjAafb3t8zS`,
    baseUrl: `http://dataservice.accuweather.com/`,
    baseUrlWeather: `currentconditions/v1/`,
    baseUrlCity: `locations/v1/cities/search`
}
function get() {
    const baseUrl = `http://dataservice.accuweather.com/currentconditions/v1/261158`;
    const query = `?apikey=${apis.key}&language=en-us&details=true`;
    fetch(baseUrl + query)
        .then(weather => {
            return weather.json();
        }).then(displayRes);
}
// get();

function displayRes(weather) {
    console.log(weather[0]);
}