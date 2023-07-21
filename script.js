let weather = {
  apikey: "a1e8b8baab95a695996d51f34b8ada35",
  fetchWeather: function (city) {
    // try{
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
              city +
              "&units=metric&appid=" +
              this.apikey
          )
            .then((response) => response.json())
            .then((data) => this.diplayWeather(data));
    // }
    // catch {
    //   document.querySelector(".err").innerHtml = "Enter the valid location ...!"
    // }
    
  },
  diplayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".location").innerHTML = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".Temp").innerHTML =
      temp + " <span><sup>o</sup></span>C";
    document.querySelector(".mode").innerHTML = description;
    document.querySelector(".humidity").innerHTML =
      "Humidity: " + humidity + " %";
    document.querySelector(".windspeed").innerHTML =
      "Wind speed: " + speed + " Km/Hr";
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function () {
    this.fetchWeather(document.querySelector(".js-input").value);
  },
};
document.querySelector(".js-input").addEventListener("keyup", function (event) {
  
    if (event.key == "Enter") {
      weather.search();
    }
   
});

document.querySelector(".search").addEventListener("click", function () {
 
    weather.search();
  
});
let docTitile = document.title;

window.addEventListener("blur", () => {
  document.title = "Thirumba va da deii..!";
});
window.addEventListener("focus", () => {
  document.title = docTitile;
});
