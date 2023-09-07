import axios from "axios";
import { useSearchParams } from "react-router-dom";

const newsSite = axios.create({
  baseURL: "https://nc-news-service-ww5y.onrender.com/api",
});

export const getArticles = (topicParams, sortParams, orderParams) => {
  if (topicParams === null && sortParams === null) {
    return newsSite
      .get("/articles")
      .then(({ data }) => {
        return data.articles;
      })
      .catch(() => {
        console.log("Error in get request");
      });
  } else if (topicParams) {
    return newsSite
      .get(`/articles?topic=${topicParams}`, { params: { topicParams } })
      .then(({ data }) => {
        return data.articles;
      })
      .catch(() => {
        console.log("Error in get topic request");
      });
  } else if (sortParams) {
    console.log(sortParams, "in api if");
    return newsSite
      .get(`/articles?sort_by=${sortParams}&order=${orderParams}`)
      .then(({ data }) => {
        return data.articles;
      })
      .catch(() => {
        console.log("Error in get sort by request");
      });
  }
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

export const postArticleComment = (article_id, data) => {
  return newsSite
    .post(`/articles/${article_id}/comments`, data)
    .then(({ data }) => {
      return data.comment;
    })
    .catch(() => {
      console.error("Error in post request");
    });
};

export const getTopics = () => {
  return newsSite
    .get(`/topics`)
    .then(({ data }) => {
      return data.topics;
    })
    .catch(() => {
      console.log("Error in get request");
    });
};
