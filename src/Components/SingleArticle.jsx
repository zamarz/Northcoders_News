import { useParams } from "react-router-dom";
import { getArticlesByID } from "../utls/api";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [searchArticle, setArticle] = useState({});

  useEffect(() => {
    getArticlesByID(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  return (
    <Container>
      <h1>{searchArticle.title}</h1>
      <p>Author: {searchArticle.author}</p>
      <img src={searchArticle.article_img_url} alt={searchArticle.title}></img>
      <p>{searchArticle.body}</p>
      <p>Comment count: {searchArticle.comment_count}</p>
      <p>Votes: {searchArticle.votes}</p>
      <p>Published on {searchArticle.created_at}</p>
    </Container>
  );
};

export default SingleArticle;
