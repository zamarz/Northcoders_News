import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/Users";
import { deleteArticleComment } from "../utls/api";
import Alert from "react-bootstrap/Alert";

const CommentCard = ({ comment }) => {
  const [disabledButton, setDisabledButton] = useState(false);
  const [showComment, setShowComment] = useState(false);

  const { username } = useContext(UserContext);

  // if (username === comment.author) {
  //   setDisabledButton(false);
  // }

  // in line way to do it: username === comment.author ? false : true

  //needs to go into button class disabled={disabledButton}
  //also do the button loading thing once it is deleting or something
  //also, just do it the simple way first

  // useEffect(
  //   (event) => {
  //     event.preventDefault();
  //   },
  //   [commentID]
  // );

  return (
    <li>
      <Card border="primary" style={{ width: "18rem" }} />
      <Card.Body>
        <Card.Title>{comment.body}</Card.Title>
        <Card.Subtitle>Author: {comment.author}</Card.Subtitle>
        <Card.Text>Votes: {comment.votes}</Card.Text>
        <Card.Text>Published: {comment.created_at}</Card.Text>
        <Button
          disabled={username === comment.author ? disabledButton : true}
          type="submit"
          variant="warning"
          onClick={() => {
            deleteArticleComment(comment.comment_id);
            setShowComment(true);
            setDisabledButton(true);
          }}
        >
          Delete comment
        </Button>
        <Alert show={showComment} variant="success">
          <Alert.Heading>Your comment has been deleted</Alert.Heading>
          <div>
            <Button
              onClick={() => setShowComment(false)}
              variant="outline-success"
            >
              Close
            </Button>
          </div>
        </Alert>
      </Card.Body>
    </li>
  );
};
export default CommentCard;
