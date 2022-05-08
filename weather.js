class Weather {
  constructor(city, state){
    this.apiKey = 'c26ae63fb3faa0a223918da72fed11a2';
    this.city = city;
  }
  // Fetch weather from API
  async getWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${this.apiKey}`);

  const responseData = await response.json();

  return responseData;
  
  }

  // Change the weather location
  changeLocation(city){
    this.city = city;
  }
}
