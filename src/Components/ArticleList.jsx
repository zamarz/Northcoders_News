import { useEffect, useState } from "react";
import { getArticles } from "../utls/api";
import ArticleCard from "./ArticleCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ArticleList = ({ currentArticles, setCurrentArticles }) => {
  useEffect(() => {
    getArticles().then((articles) => {
      setCurrentArticles(articles);
    });
  }, []);

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
