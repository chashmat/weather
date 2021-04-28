const key = `URkMv8qNAL1ettx3XUnfAsjAafb3t8zS`;

// getting weather

// const getWeather = async (id) => {
//   const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
//   const query = `${id}?apikey=${key}`;

//   const res = await fetch(baseUrl + query);
//   const data = await res.json();

//   return data[0];
//   console.log(data)
// };

// getting city
// const getCity = async (city) => {
//   const baseUrl =
//     "http://dataservice.accuweather.com/locations/v1/cities/search";
//   const query = `?apikey=${key}&q=${city}`;

//   const res = await fetch(baseUrl + query);
//   const data = await res.json();

//   return data[0];
//   console.log(data)
// };