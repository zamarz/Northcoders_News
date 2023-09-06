import { useParams } from "react-router-dom";
import {
  getArticlesByID,
  getCommentsByID,
  patchArticleVotes,
} from "../utls/api";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import CommentCard from "./CommentCard";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [searchArticle, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [currentlyLoading, setCurrentlyLoading] = useState(false);
  const [newVotes, setNewVotes] = useState({ inc_votes: 0 });
  const [articleVotes, setArticleVotes] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    patchArticleVotes(article_id, newVotes)
      .then(({ article }) => {
        setArticleVotes(article.votes);
      })
      .catch((err) => {
        if (err) {
          setShow(true);
        }
      });
  };

  useEffect(() => {
    setCurrentlyLoading(true);
    getArticlesByID(article_id).then((article) => {
      setCurrentlyLoading(false);
      setArticle(article);
      setArticleVotes(article.votes);
    });
    getCommentsByID(article_id).then((iDComments) => {
      setCurrentlyLoading(false);

      setComments(iDComments);
    });
  }, [article_id, patchArticleVotes]);

  const handleChange = (event) => {
    const value = event.target.value;

    setNewVotes({ inc_votes: value });
  };

  if (currentlyLoading)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">
          We're currently loading your article
        </span>
      </Spinner>
    );

  return (
    <Container>
      <h1>{searchArticle.title}</h1>
      <p>Author: {searchArticle.author}</p>
      <img src={searchArticle.article_img_url} alt={searchArticle.title}></img>
      <p>{searchArticle.body}</p>
      <p>Comment count: {searchArticle.comment_count}</p>
      <p>Votes: {articleVotes}</p>
      <Alert show={show} variant="warning">
        <Alert.Heading>Something went wrong...</Alert.Heading>
        <p>It looks like there was a problem with your request</p>
        <div>
          <Button onClick={() => setShow(false)} variant="outline-warning">
            Close
          </Button>
        </div>
      </Alert>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} md="4">
          <Form.Label>Change the article's votes:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Change the votes"
            defaultValue="0"
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit">Submit votes</Button>
      </Form>
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
