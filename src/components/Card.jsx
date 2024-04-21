import { Link } from "react-router-dom";
import { useContext } from "react";
import { convertDate } from "../utils/convertDate";
import generateSlug from "../utils/generateSlug";
import { readingTime } from "../utils/readingTime";
import { ThemeContext } from "./contexts/ThemeContext";

const Card = ({ data }) => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const labels = data.labels ? data.labels.split(",") : "";
  const slug = generateSlug(data.title);

  return (
    <article
      key={data.id}
      className={`mb-16 flex max-w-xl flex-col items-start justify-between border-b pb-10 ${isDarkTheme ? "border-gray-100" : "border-gray-200"}`}
    >
      <div className="group relative">
        <h1 className="font-semibold text-gray-900">
          <Link
            to={data.href ? data.href : `article/${data.id}/${slug}`}
            className={`${isDarkTheme ? "text-gray-100" : "text-gray-900"}`}
          >
            <span className="absolute inset-0" />
            {data.title}
          </Link>
        </h1>
        <p
          className={`my-5 line-clamp-3 text-sm leading-6 opacity-75 ${isDarkTheme ? "text-gray-100" : "text-gray-900"}`}
        >
          {data.summary}
        </p>
        {data.image && (
          <img className="w-full md:w-1/2" src={data.image} alt="" />
        )}
      </div>
      {labels && (
        <div className="badges mt-3">
          {labels.map((label, index) => (
            <span
              key={index}
              className="me-2 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium  text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
            >
              {label}
            </span>
          ))}
        </div>
      )}
      <div className="mt-5 flex w-full items-center justify-between">
        <p
          className={`flex gap-2 opacity-50 ${isDarkTheme ? "text-gray-100" : "text-gray-900"}`}
        >
          {data.viewCount ? (
            <span className="text-xs">{data.viewCount + " views ·"}</span>
          ) : null}
          <span className="flex items-center">
            {/* <CalendarIcon className="h-4 w-4" aria-hidden="true" /> */}
            <time className="text-xs" dateTime={data.date}>
              {convertDate(data.date)}
            </time>
          </span>
          {data.content ? (
            <span className="text-xs">
              {"· " + readingTime(data.content) + " min"}
            </span>
          ) : null}
        </p>
      </div>
    </article>
  );
};

export default Card;
