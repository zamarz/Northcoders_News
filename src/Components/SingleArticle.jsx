import { useParams } from "react-router-dom";
import {
  getArticlesByID,
  getCommentsByID,
  patchArticleVotes,
  postArticleComment,
} from "../utls/api";
import { UserContext } from "../contexts/Users";
import { useContext } from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import CommentCard from "./CommentCard";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import ErrorPage from "./ErrorPage";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [searchArticle, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [currentlyLoading, setCurrentlyLoading] = useState(false);
  const [newVotes, setNewVotes] = useState({ inc_votes: 0 });
  const [articleVotes, setArticleVotes] = useState("");
  const [show, setShow] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [newComment, setNewComment] = useState({ body: "", author: "" });
  const { username } = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);
  const [showVote, setShowVote] = useState(false);
  const [disabledVote, setDisabledVote] = useState(false);
  const [error, setError] = useState(null);
  const [validated, setValidated] = useState(false);

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
    // setCurrentlyLoading(true);
    getArticlesByID(article_id)
      .then((article) => {
        setCurrentlyLoading(false);
        setArticle(article);
        setArticleVotes(article.votes);
      })
      .catch((err) => {
        setError({ err });
      });
    getCommentsByID(article_id)
      .then((iDComments) => {
        setCurrentlyLoading(false);

        setComments(iDComments);
      })
      .catch((err) => {
        setError({ err });
      });
  }, [article_id, patchArticleVotes]);

  const handleChange = () => {
    setNewVotes({ inc_votes: 1 }).then(() => {
      patchArticleVotes(article_id, newVotes)
        .then(({ article }) => {
          setArticleVotes(article.votes);
        })
        .catch((err) => {
          if (err) {
            setShow(true);
          }
        });
    });
  };

  const handleCommentChange = (event) => {
    const value = event.target.value;
    setNewComment({ author: username, body: value });
  };

  const handleNewComment = (event) => {
    event.preventDefault();
    if (!newComment.length > 0) {
    }
    setValidated(true);
    const body = newComment;
    postArticleComment(article_id, body).then((response) => {
      if (response) {
        setShowComment(true);
      }
    });
  };

  const handleCommentClick = (event) => {
    event.preventDefault();
    setDisabled(true);
  };

  if (currentlyLoading)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">
          We're currently loading your article
        </span>
      </Spinner>
    );

  if (error) {
    return <ErrorPage error={error} />;
  }

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
          <Form.Label>Change the article's votes: </Form.Label>

          <Button
            onChange={handleChange}
            type="submit"
            variant="success"
            disabled={disabledVote}
            onClick={() => {
              setNewVotes({ inc_votes: 1 });
              setShowVote(true);
              setDisabledVote(true);
            }}
          >
            Vote +
          </Button>
          <Button
            onChange={handleChange}
            type="submit"
            variant="danger"
            disabled={disabledVote}
            onClick={() => {
              setNewVotes({ inc_votes: -1 });
              setShowVote(true);
              setDisabledVote(true);
            }}
          >
            Vote -
          </Button>
          <Alert show={showVote} variant="success">
            <Alert.Heading>Thanks for voting!</Alert.Heading>
            <div>
              <Button
                onClick={() => setShowVote(false)}
                variant="outline-success"
              >
                Close
              </Button>
            </div>
          </Alert>
        </Form.Group>
      </Form>
      <p>Published on {searchArticle.created_at}</p>
      <Form noValidate validated={validated} onSubmit={handleNewComment}>
        <Form.Group className="mb-3">
          <Form.Label>Add a comment here:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={handleCommentChange}
            required
            disabled={disabled}
          />

          <Form.Control.Feedback type="invalid">
            Please enter a comment
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          type="submit"
          disabled={disabled}
          onClick={() => {
            handleCommentClick();
          }}
        >
          Submit comment
        </Button>
      </Form>
      <Alert show={showComment} variant="success">
        <Alert.Heading>Your comment has been posted!</Alert.Heading>
        <p>Thanks for adding your opinion to this important topic</p>
        <div>
          <Button
            onClick={() => setShowComment(false)}
            variant="outline-success"
          >
            Close
          </Button>
        </div>
      </Alert>
      <ul className="list-unstyled justify-content-md-center">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </Container>
  );
};

export default SingleArticle;
