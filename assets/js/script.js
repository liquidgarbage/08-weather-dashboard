//When a user searches for a city they are presented with current and future conditions for that city and that city is added to the search history
//input stored in button list at side

// When a user views the current weather conditions for that city they are presented with:
// The city name
// The date
// An icon representation of:
// weather conditions
// The temperature
// The humidity
// The wind speed
// When a user view future weather conditions for that city they are presented with a 5-day forecast that displays:
// The date
// An icon representation of weather conditions
// The temperature
// The humidity
// When a user click on a city in the search history they are again presented with current and future conditions for that city

// // This is our API key
// var APIKey = "d0f096bacb872484351b2fb0efd9230b";

// // // Here we are building the URL we need to query the database
// // var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
// //   "q=Bujumbura,Burundi&appid=" + APIKey;

// // // Here we run our Fetch call to the OpenWeatherMap API
// // fetch(queryURL)
// //   .then(function (response) {
// //     // Calling .json() to access the json data stored inside the returned promise
// //     return response.json();
// //   })
// //   // We store all of the retrieved data inside of an object called "data"
// //   .then(function (data) {

// const city = $('.city');
// const wind = $('.wind');
// const humidity = $('.humidity');
// const temp = $('.temp');
// const form = $('.city-search');
// const formInput =$('.city-search input');

// form.on('submit', function(event) {
//     event.preventDefault();

//     // pick up input value, then concatenate with query URL
//     const cityName = formInput.val();
//     const queryURL = "https://api.openweathermap.org/data/2.5/forecast?" + cityName + ",uk&appid=" + APIKey + "&units=metric";

//     // We then created an Fetch call api.openweathermap.org/data/2.5/forecast?q={city name},{country code}&appid={API key}
//     fetch(queryURL)
//         .then(function (response) {
//             return response.json();

//         })
//         .then(function (data) {
//             // Create CODE HERE to Log the queryURL
//             console.log(queryURL);
//             // Create CODE HERE to log the resulting object
//             console.log(data);
//             // Create CODE HERE to transfer content to HTML
//             city.text('City name: ' + data.name); // 'City name: ' + data.name
//             wind.text('Wind speed: ' + data.wind.speed);
//             humidity.text('Humidity: ' + data.main.humidity);
//             temp.text('Temperature: ' + data.main.temp + ' C');
//         });

// });

fetch(
  "https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&appid=d0f096bacb872484351b2fb0efd9230b&units=metric"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var cityName = data.city.name;
    const date = data.list[0].weather[0].dt_txt;
  });

//card with city name and current date
// temp
