import Article from "./Card";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

const Articles = ({articles}) => {
  return (
    <div className="mx-auto flex flex-col items-center">
      {articles.length ? (
        articles.map((article) => (
          <Article data={article} key={article.id} />
        ))
      ) : (
        <ArrowPathIcon className="h-10 w-10 animate-spin" />
      )}
    </div>
  );
};
export default Articles;
