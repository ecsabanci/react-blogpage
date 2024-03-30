import { useParams } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { ArticlesContext } from "./contexts/ArticlesContext";
import { useContext } from "react";

const ArticleDetail = () => {
  const { id } = useParams();
  const [clapCount, setClapCount] = useState(0);
  const { isDarkTheme } = useContext(ThemeContext);
  const { articles, updateViewOrClapCount } = useContext(ArticlesContext);

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (articles.length > 0 && !post) {
      const selectedPost = articles.find((article) => article.id == id);
      if (selectedPost) {
        setPost(selectedPost);
        setClapCount(selectedPost.clapCount);
      }
      updateViewOrClapCount(id, "viewCount");
    }
  }, [id, post, articles]);

  const updateClapCount = () => {
    setClapCount((prevCount) => prevCount + 1);
    updateViewOrClapCount(id, "clapCount");
  };

  return (
    <div className="mx-auto lg:flex w-11/12 items-start gap-4">
      <button
        className="flex mb-4 items-center gap-2 rounded-md bg-gray-800 px-2 py-1 font-medium"
        onClick={() => updateClapCount()}
      >
        <HeartIcon
          className="h-6 w-6 text-pink-500 hover:scale-105"
          aria-hidden="true"
        />
        <span className="text-white">{clapCount}</span>
      </button>

      <div className="col-span-11 break-words">
        {post ? (
          <div
            className={`${isDarkTheme ? "text-gray-100" : "text-gray-900"}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        ) : null}
      </div>
    </div>
  );
};
export default ArticleDetail;
