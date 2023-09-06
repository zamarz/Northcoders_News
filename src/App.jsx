import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import ArticleList from "./Components/ArticleList";
import SingleArticle from "./Components/SingleArticle";

function App() {
  return (
    <>
      <div>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route
            path="/articles/:article_id/comments"
            element={<SingleArticle />}
          />
          <Route
            path="/articles/:article_id/comments"
            element={<SingleArticle />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
