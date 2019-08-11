class Weather {
  constructor(city, country) {
    this.apiKey = '38cc51ca655d6b8ef8a1d558e7b12b13';
    this.city = city;
    this.country = country;
  }

  //Fetch weather from API
  async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric&lang=ru`);

    const responseData = await response.json();
    return responseData;
  }

  //Change Location
  changeLocation(city, country){
    this.city = city;
    this.country = country;
  }

}