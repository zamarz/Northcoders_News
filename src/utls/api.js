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
