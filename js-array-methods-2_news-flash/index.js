import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

console.log(news[0]);

// Part 1 - start here
const filteredNews = news.filter((article) =>
  article.categories.includes("politics")
);

// Part 2 - start here
// const sortedNews = filteredNews;
const sortedNews = filteredNews.slice().sort((a, b) => {
  const lengthA = a.body.length;
  const lengthB = b.body.length;
  if (lengthA < lengthB) {
    return -1;
  }
  if (lengthA > lengthB) {
    return 1;
  }
  return 0;
});

sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});

// Check your filter and sorting order here:
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
