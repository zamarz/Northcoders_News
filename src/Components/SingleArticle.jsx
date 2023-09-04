import { useParams } from "react-router-dom";
import { getArticlesByID, getCommentsByID } from "../utls/api";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import CommentCard from "./CommentCard";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [searchArticle, setArticle] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticlesByID(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  useEffect(() => {
    getCommentsByID(article_id).then((iDComments) => {
      setComments(iDComments);
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
      <ul className="list-unstyled justify-content-md-center">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </Container>
  );
};

export default SingleArticle;
