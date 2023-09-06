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
      return data.article;
    })
    .catch(() => {
      console.log("Error in get request");
    });
};

export const getCommentsByID = (article_id) => {
  return newsSite
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    })
    .catch(() => {
      console.log("Error in get request");
    });
};

export const patchArticleVotes = (article_id, inc_votes) => {
  return newsSite
    .patch(`/articles/${article_id}`, inc_votes)
    .then(({ data }) => {
      return data;
    })
    .catch(() => {
      console.log("Error in patch request");
    });
};
