
class News {
  constructor() {
    this.api = 'caa06c1f692a4fef9f384ab3c6051e57';
  }

  //Fetch news from API
  async getNews(){
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=ru&pageSize=100&apiKey=${this.api}`);

    const responseData = await response.json();
    return responseData;
  }
  
}