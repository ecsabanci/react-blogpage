import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ArticlesContext } from "./ArticlesContext";
import fetchTable from "../../utils/fetchTable";
import supabase from "../../lib/supabaseClient";

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  const results = useQuery(["articles"], fetchTable);

  const updateViewOrClapCount = async (id, field) => {
    let fieldCount = 0;
    const updatedArticles = articles.map((article) => {
      if (article.id == id) {
        article[field] += 1;
        fieldCount = article[field];
      }

      return article;
    });
    setArticles(updatedArticles);

    try {
      if (id) {
        await supabase
          .from("articles")
          .update({ [field]: fieldCount })
          .eq("id", id);
      }
    } catch (error) {
      console.error("Error updating view count:", error);
    }
  };

  useEffect(() => {
    if (results.isSuccess) {
      const data = (results.data ?? [])
        .filter((article) => !article.disabled)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

      setArticles(data);
    }
  }, [results.isSuccess, results.data]);

  return (
    <ArticlesContext.Provider
      value={{ articles, setArticles, updateViewOrClapCount }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};
