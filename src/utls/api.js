import axios from "axios";

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
      .catch(({ err }) => {
        return err.data;
      });
  } else if (topicParams) {
    return newsSite
      .get(`/articles?topic=${topicParams}`, { params: { topicParams } })
      .then(({ data }) => {
        return data.articles;
      });
    // .catch((err) => {
    //   console.log(err.response);

    //   // console.log(err.response.data);

    //   // console.log(err.response.headers);
    //   // console.log(err.response.status);
    // });
  } else if (sortParams) {
    console.log(sortParams, "in api if");
    return newsSite
      .get(`/articles?sort_by=${sortParams}&order=${orderParams}`)
      .then(({ data }) => {
        return data.articles;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const getArticlesByID = (article_id) => {
  return newsSite.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
  // .catch((err) => {
  //   console.log(err);
  // });
};

export const getCommentsByID = (article_id) => {
  return newsSite.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
  // .catch((err) => {
  //   console.log(err);
  // });
};

export const patchArticleVotes = (article_id, inc_votes) => {
  return newsSite
    .patch(`/articles/${article_id}`, inc_votes)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postArticleComment = (article_id, data) => {
  return newsSite
    .post(`/articles/${article_id}/comments`, data)
    .then(({ data }) => {
      return data.comment;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const deleteArticleComment = (comment_id) => {
  return newsSite.delete(`/comments/${comment_id}`).catch((err) => {
    console.log(err);
  });
};

export const getTopics = () => {
  return newsSite
    .get(`/topics`)
    .then(({ data }) => {
      return data.topics;
    })
    .catch((err) => {
      console.log(err);
    });
};
