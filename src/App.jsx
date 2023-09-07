import "./App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import ArticleList from "./Components/ArticleList";
import SingleArticle from "./Components/SingleArticle";
import TopicList from "./Components/TopicList";

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
          <Route path="/topics" element={<TopicList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
