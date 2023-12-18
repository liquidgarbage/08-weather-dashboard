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

//STUFF TO BE ADDED FROM CLASS

//function to get city name in search and add to city list array
let cityList = [];
function getInput() {
  $("#search-button").on("click", function (event) {
    event.preventDefault();
    const city = $("#search-input").val();
    console.log(city);
    cityList.push(city);

    renderInput();
  });
}

getInput();

//function to render city input to the html list
function renderInput(city) {
  // Deleting the movie buttons prior to adding new movie buttons
  // (this is necessary otherwise we will have repeat buttons)
  $("#history").empty();
  // Looping through the array of movies

  for (var i = 0; i < cityList.length; i++) {
    // Then dynamicaly generating buttons for each movie in the array.
    // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
    let cityEL = $("<button>");
    // Adding a class
    cityEL.addClass("weather-hr");
    // Adding a data-attribute with a value of the movie at index i
    // Providing the button's text with a value of the movie at index i

    cityEL.attr("data-name", cityList[i]);
    cityEL.text(cityList[i]);
    // Adding the button to the HTML

    $("#history").append(cityEL);
  }
  storeCityList();

  // This function handles events where one button is clicked
  $("#search-button").on("click", function (event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var place = $("#search-input").val().trim();
    // The movie from the textbox is then added to our array
    cityList.push(place);

    // calling renderButtons which handles the processing of our movie array
    renderInput();
  });
}

//function to store the input to local storage
function storeCityList() {
  localStorage.setItem("city-names", JSON.stringify(cityList));
}

// city.text('City name: ' + data.name); // 'City name: ' + data.name
// dsiplay city names when submit box is clicked
// grab city name from submit
// have an array where we can push the city name in
// grab all city name to add to elements in page

//function button on click bring up weather info
function cityButton(event) {
  preventDefault(event);
}

//hitesh
var APIkey = "0c3ae1818c21ab6f3c0c2c74a674fa03";
var cityLocation = $("#search-input").val();
var queryURL =
  "http://api.openweathermap.org/data/2.5/forecast?q=" +
  cityLocation +
  "&appid=" +
  APIkey;

// $('#search-button').on('click', function (event){
// event.preventDefault()
// var APIkey = "0c3ae1818c21ab6f3c0c2c74a674fa03";
// var cityLocation = $('#search-input').val();
// var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityLocation + "&appid=" + APIkey;

// // The city name
// // The date  list[0].dt_txt
// // An icon representation of weather conditions list[0].weather[0].icon
// // The temperature list[0].main.temp
// // The humidity list[0].main.humidity
// // The wind speed list[0].wind.speed

//     fetch(queryURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {

//     console.log(data.city.name)
//     console.log(data)
//     const cityName = data.city.name
//     const date = data.list[0].dt_txt
//     const icon = data.list[0].weather[0].icon

//     const div = $('.card')
//     console.log(cityName)

//     div.text(cityName)

//   })
// });

let cityList = [];
function getInput() {
  $("#search-button").on("click", function (event) {
    event.preventDefault();
    const city = $("#search-input").val();
    console.log(city);
    cityList.push(city);
    renderInput();
  });
}
getInput();
function renderInput(city) {
  $("ul").empty();
  for (var i = 0; i < cityList.length; i++) {
    const cityEL = $("<li>").text(cityList[i]).addClass("list-item-group city"); // add a click event
    $("ul").append(cityEL);
  }
  storeCityLsit();
}
function storeCityLsit() {
  localStorage.setItem("city-names", JSON.stringify(cityList));
}
// dsiplay city names when submit box is clicked
// grab city name from submit
// have an array where we can push the city name in
// grab all city name to add to elements in page
