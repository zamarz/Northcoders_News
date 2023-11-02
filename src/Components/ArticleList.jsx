import { useEffect, useState } from "react";
import { getArticles } from "../utls/api";
import ArticleCard from "./ArticleCard";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { useSearchParams } from "react-router-dom";
import SortArticles from "./Sort_Articles";
import ErrorPage from "./ErrorPage";

const ArticleList = ({ params }) => {
  const [currentlyLoading, setCurrentlyLoading] = useState(false);
  const [currentArticles, setCurrentArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);

  const topicParams = searchParams.get("topic");
  const sortParams = searchParams.get("sort_by");
  const orderParams = searchParams.get("order");

  useEffect(() => {
    setCurrentlyLoading(true);
    getArticles(topicParams, sortParams, orderParams)
      .then((articles) => {
        setCurrentlyLoading(false);
        setCurrentArticles(articles);
      })
      .catch((err) => {
        setError({ err });
      });
  }, [params, searchParams]);
  if (currentlyLoading)
    return (
      <div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">
            We're currently loading your articles
          </span>
        </Spinner>
      </div>
    );
  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <div>
      <SortArticles />
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
