// initialize weather obj
const saveChanges = document.getElementById("w-change-btn")
//initializing ui obj
const ui = new UI();
//inizializing localstorage obj
const storage = new Storage();

//to have a default city whenever I open the app
const cityInLocalStorage = storage.getLocation()
const weather = new Weather(cityInLocalStorage)

document.addEventListener('DOMContentLoaded', function(event){
  weather.getWeather().then(data=>{
    ui.paint(data)
    storage.getLocation()
  })
  event.preventDefault()
})

saveChanges.addEventListener("click", function(event){
  
  const city = document.getElementById("city").value
  document.getElementById("city").value = ""
  const weather = new Weather(city)
  weather.getWeather().then(data=>{
    ui.paint(data)
    storage.setLocation(data.city.name)
  }).catch(err=>{console.log(err)});

  //this is to close the window when user changes the location
  document.getElementById("close").click()
})

