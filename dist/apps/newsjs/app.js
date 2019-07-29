//Init news object
const news = new News();

//Init UI
const ui = new UI();

//Get news on DOM load
document.addEventListener('DOMContentLoaded', getNews);

function getNews(){
  news.getNews()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}