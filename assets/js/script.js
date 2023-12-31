// TODO
// 1. When user search for a city in the input, call weather API and show the result in the HTML
//    - Add event listener to form submit
//    - Get the user input value
//    - Build the API query URL based on the user input value
//    - Call the API and render the result in the HTML
//        - Get the city name and show it in the main weather forecast card
//        - Get the first weather forecast item and get the following values
//            - date
//            - temperature
//            - wind speed
//            - humidity
//            - icon
//        - render those values to the main card
//        - Loop through all weathers array and get the following values
//            - date
//            - temperature
//            - wind speed
//            - humidity
//            - icon
//        - render those values to the smaller card
// 2. When user search for a city, store it in local storage
// 3. On initial page load load the search history and show it as a list in the HTML
//    - ....
//    - Build the API query URL based on the history stored in local storage
//    - Call the API and render the result in the HTML
// 4. When user click on the search history, call weather API and show the result in the HTML
// 5. CSS

/////////

let cityList = [];
function getInput() {
  $("#search-button").on("click", function (event) {
    event.preventDefault();
    var APIkey = "d0f096bacb872484351b2fb0efd9230b";
    var city = $("#search-input").val();
    var queryURL =
      "http://api.openweathermap.org/data/2.5/forecast?units=metric&q=" +
      city +
      "&appid=" +
      APIkey;
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        const cityName = data.city.name;
        const date = data.list[0].dt_txt;
        const temperature = data.list[0].main.temp;
        const icon = data.list[0].weather[0].icon;
        const windSpeed = data.list[0].wind.speed;
        const humidity = data.list[0].main.humidity;
        console.log(cityName, date, temperature, icon, windSpeed, humidity);
        cityList.push(city);
        renderInput();
      });
  });
}
getInput();

//function to render city input to the html list
function renderInput(city) {
  // Deleting the movie buttons prior to adding new movie buttons
  // (this is necessary otherwise we will have repeat buttons)
  $("hr").empty();
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

    $("hr").append(cityEL);
  }
  
  storeCityList();
  
  function storeCityList() {
    localStorage.setItem("city-list", JSON.stringify(cityList));
  }
}
