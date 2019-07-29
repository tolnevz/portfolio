class UI {
  constructor(){
    this.newsTitle = document.getElementById('newsTitle');
    this.newsCount = document.getElementById('newsCount');
    this.newsSource = document.getElementById('newsSource');
    this.newsImage = document.getElementById('newsImage');
    this.newsDescription = document.getElementById('newsDescription');
    this.newsAuthor = document.getElementById('newsAuthor');
    this.newsLink = document.getElementById('newsLink');
    this.newsDate = document.getElementById('newsDate');

    this.newsWrapper = document.getElementById('newsWrapper');
  }

  paint(news){

    let articlesArr = news.articles;


    this.newsCount.textContent = `Total news - ${news.totalResults}`;


    articlesArr.forEach(article => {
      if(article.author === null || article.author === ''){
        article.author = 'No information';
      }

      let splittedDate = article.publishedAt.substr(0, 10);

      this.newsWrapper.innerHTML += `
      <div class="col-md-4 card-group">
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title" id="newsTitle">${article.title}</h5>
                <h6 class="card-subtitle text-muted" id="newsSource">${article.source.name}</h6>
            </div>
            <a href="${article.url}" target="_blank">
              <img style="height: 200px; width: 100%; display: block;" src="${article.urlToImage}" alt="${article.title}" id="newsImage">
            </a>
            <div class="card-body">
                <p class="card-text" id="newsDescription">${article.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item" id="newsAuthor">Author: ${article.author}</li>
            </ul>
            <div class="card-body">
                <a href="${article.url}" class="btn btn-primary" id="newsLink" target="_blank">Подробнее</a>
            </div>
            <div class="card-footer text-muted" id="newsDate">News date: ${splittedDate}</div>
        </div>
      </div>

      `;
    });

  }
}