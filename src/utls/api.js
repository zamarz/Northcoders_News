import axios from "axios";

const newsSite = axios.create({
  baseURL: "https://nc-news-service-ww5y.onrender.com/api",
});

export const getArticles = () => {
  return newsSite
    .get("/articles")
    .then(({ data }) => {
      return data.articles;
    })
    .catch(() => {
      console.log("Error in get request");
    });
};

export const getArticlesByID = (article_id) => {
  return newsSite
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      console.log(data);
      return data.article;
    })
    .catch(() => {
      console.log("Error in get request");
    });
};
