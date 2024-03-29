import fetchTable from "../utils/fetchTable";
import { useQuery } from "@tanstack/react-query";
import Bookmark from "./Card";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

const Bookmarks = () => {
  const results = useQuery(["bookmarks"], fetchTable);

  const bookmarks = results?.data ?? [];

  return (
    <div className="mx-auto flex flex-col items-center lg:items-start sm:w-full lg:w-1/2">
      {bookmarks.length ?
        bookmarks.map((bookmark) => (
          <Bookmark data={bookmark} key={bookmark.id} />
        )) : <ArrowPathIcon className="h-10 w-10 animate-spin mx-auto" />}
    </div>
  );
};
export default Bookmarks;
