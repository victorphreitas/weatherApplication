class UI {
  constructor(){
    this.location = document.getElementById('w-location')
    this.desc = document.getElementById('w-desc')
    this.string = document.getElementById('w-string')
    this.icon = document.getElementById('w-icon')
    this.details = document.getElementById('w-details')
    this.humidity = document.getElementById('w-humidity')
    this.tempMin = document.getElementById('w-dewpoint')
    this.feelsLike = document.getElementById('w-feels-like')
    this.wind = document.getElementById('w-wind')
  }

  paint(weather){
    this.location.textContent = weather.city.name + " " + weather.city.country
    this.desc.textContent = weather.list[1].description
    //this gives the temperature in Kelvin
    this.string.textContent = (weather.list[0].main.temp - 273.15).toFixed(2) + " (°C)"
    this.icon.setAttribute("src", `http://openweathermap.org/img/wn/${weather.list[1].weather[0].icon}@2x.png`)
    this.humidity.textContent = `Relative humidity: ${weather.list[0].main.humidity}%`
    this.feelsLike.textContent = `Feels Like: ${(weather.list[0].main.feels_like-273.15).toFixed(2)} Celsius`
    this.tempMin.textContent = `Temperature min: ${(weather.list[0].main.temp_min-273.15).toFixed(2)} Celsius`
    //wind speed in meters per second multiply by 3.6 to get it in km/h
    this.wind.textContent = `Wind: ${(weather.list[3].wind.speed*3.6).toFixed(2)} km/h`

    //changing color of location
    this.location.style.color = "white"
    this.location.style.fontSize = "38px"
  }
}
