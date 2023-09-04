import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const CommentCard = ({ comment }) => {
  return (
    <li>
      <Card border="primary" style={{ width: "18rem" }} />
      <Card.Body>
        <Card.Title>{comment.body}</Card.Title>
        <Card.Subtitle>Author: {comment.author}</Card.Subtitle>
        <Card.Text>Votes: {comment.votes}</Card.Text>
        <Card.Text>Published: {comment.created_at}</Card.Text>
      </Card.Body>
    </li>
  );
};
export default CommentCard;
