import { NavLink, useNavigate, useParams } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { ArticlesContext } from "./contexts/ArticlesContext";
import { useContext } from "react";
import {
  ArrowLongLeftIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const ArticleDetail = () => {
  const { id } = useParams();
  const [clapCount, setClapCount] = useState(0);
  const { isDarkTheme } = useContext(ThemeContext);
  const { articles, updateViewOrClapCount } = useContext(ArticlesContext);

  const navigate = useNavigate();

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
    <div className="mx-auto items-start gap-4 lg:flex lg:w-11/12">
      <div className="my-8 flex flex-col items-start justify-between gap-4 lg:my-0">
        <ArrowLongLeftIcon
          onClick={() => navigate(-1)}
          className={`h-6 w-6 lg:hidden ${isDarkTheme ? "text-gray-100" : "text-gray-900"}`}
        />
        <button
          className="flex items-center gap-1 self-end rounded-md bg-gray-800 px-2 py-1 font-medium text-lime-500"
          onClick={() => updateClapCount()}
        >
          <HeartIcon
            className="h-4 w-4 text-lime-500 hover:scale-105"
            aria-hidden="true"
          />
          {clapCount ?? null}
        </button>
        {Boolean(import.meta.env?.VITE_ISADMIN) && (
          <NavLink to={`/update/${id}`}>
            <PencilSquareIcon className="h-6 w-6 bg-green-500 text-white" />
          </NavLink>
        )}
      </div>

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
