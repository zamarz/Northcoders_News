import Card from "react-bootstrap/Card";

const ArticleCard = ({ article }) => {
  return (
    <li>
      <Card border="primary" style={{ width: "18rem" }} />
      <Card.Img
        variant="top"
        src={article.article_img_url}
        alt={article.title}
      />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Subtitle>Author: {article.author}</Card.Subtitle>
        <Card.Text>Topic: {article.topic}</Card.Text>
        <Card.Text>Votes: {article.votes}</Card.Text>
      </Card.Body>
    </li>
  );
};
export default ArticleCard;
