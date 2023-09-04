import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import ArticleList from "./Components/ArticleList";

function App() {
  const [currentArticles, setCurrentArticles] = useState([]);

  return (
    <>
      <div>
        <Header />
        <Navigation />
        <Routes>
          <Route
            path="/articles"
            element={
              <ArticleList
                currentArticles={currentArticles}
                setCurrentArticles={setCurrentArticles}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
