import { useEffect, useState } from "react";
import { getArticles } from "../utls/api";
import ArticleCard from "./ArticleCard";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { useSearchParams } from "react-router-dom";

const ArticleList = ({ params }) => {
  const [currentlyLoading, setCurrentlyLoading] = useState(false);
  const [currentArticles, setCurrentArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const topicParams = searchParams.get("topic");

  useEffect(() => {
    setCurrentlyLoading(true);
    getArticles(topicParams).then((articles) => {
      setCurrentlyLoading(false);
      setCurrentArticles(articles);
    });
  }, [params, searchParams]);

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
