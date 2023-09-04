import { useEffect, useState } from "react";
import { getArticles } from "../utls/api";
import ArticleCard from "./ArticleCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

const ArticleList = ({ currentArticles, setCurrentArticles }) => {
  const [currentlyLoading, setCurrentlyLoading] = useState(false);

  useEffect(() => {
    setCurrentlyLoading(true);
    getArticles().then((articles) => {
      setCurrentlyLoading(false);
      setCurrentArticles(articles);
    });
  }, []);

  if (currentlyLoading)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">
          We're currently loading your articles
        </span>
      </Spinner>
    );

  return (
    <div>
      <ul className="list-unstyled justify-content-md-center">
        <Row md={4}>
          {currentArticles.map((currentArticle) => {
            return (
              <ArticleCard
                key={currentArticle.article_id}
                article={currentArticle}
              />
            );
          })}
        </Row>
      </ul>
    </div>
  );
};
export default ArticleList;
