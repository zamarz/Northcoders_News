import "./App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import ArticleList from "./Components/ArticleList";
import SingleArticle from "./Components/SingleArticle";
import TopicList from "./Components/TopicList";
import ErrorPage from "./Components/ErrorPage";
import { useState } from "react";

function App() {
  const [error, setError] = useState({
    err: { message: "It looks like this page doesn't exist" },
  });

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
          <Route path="/topics" element={<TopicList />} />
          <Route path="*" element={<ErrorPage error={error} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
