import { Routes, Route, Navigate } from "react-router-dom";
import Details from "./Details";
import Header from "./sidebar/Header";
import Articles from "./Articles";
import ArticleDetail from "./ArticleDetail";
import Home from "./Home";
import Bookmarks from "./Bookmarks";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";
import { ArticlesContext } from "./contexts/ArticlesContext";

const Main = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { articles, setArticles } = useContext(ArticlesContext);

  return (
    <div
      className={`h-screen gap-4 p-6 px-4 lg:grid lg:grid-cols-6 lg:overflow-hidden ${isDarkTheme ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <Header />

      <div className="col-span-5 lg:overflow-y-scroll lg:border-l-2">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/articles" replace={true} />}
          ></Route>

          <Route path="/home" element={<Home />} />
          <Route path="/aboutme" element={<Details />} />
          <Route
            path="/articles"
            element={<Articles articles={articles} setArticles={setArticles} />}
          />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route
            path="/articles/article/:id/:slug"
            element={<ArticleDetail />}
          />
        </Routes>
      </div>
    </div>
  );
};
export default Main;
