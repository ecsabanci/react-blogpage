import { Routes, Route, Navigate } from "react-router-dom";
import AddOrUpdateArticle from "./AddOrUpdateArticle";
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
      className={`h-dvh gap-4 overflow-x-hidden p-6 px-4 lg:grid lg:h-screen lg:grid-cols-6 lg:overflow-hidden ${isDarkTheme ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <Header />

      <div className="col-span-5 lg:overflow-y-scroll lg:border-l-2">
        <Routes>
          <Route path="/" element={<Home isDarkTheme={isDarkTheme} />} />
          <Route
            path="/articles"
            element={<Articles articles={articles} setArticles={setArticles} />}
          />
          {Boolean(import.meta.env?.VITE_ISADMIN) && (
            <>
              <Route path="/addarticle" element={<AddOrUpdateArticle />} />
              <Route path="/update/:id" element={<AddOrUpdateArticle />} />
            </>
          )}
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
