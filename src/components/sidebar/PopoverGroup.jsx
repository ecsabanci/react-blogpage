import {
  HomeIcon,
  PencilIcon,
  PlusIcon,
  BookmarkIcon,
  ArrowDownOnSquareIcon,
} from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";
import OnlineLinks from "./OnlineLinks";
import resume from "../../../public/Emre_Cagri_Sabanci.pdf";
import { Popover } from "@headlessui/react";


const PopoverGroup = ({ isDarkTheme }) => {
  const navLinks = [
    { to: "/", text: "Home", icon: <HomeIcon className="h-4 w-4" />, render: true },
    {
      to: "/articles",
      text: "Writing",
      icon: <PencilIcon className="h-4 w-4" />,
      render: true
    },
    {
      to: "/addarticle",
      text: "Add Article",
      icon: <PlusIcon className="h-4 w-4" />,
      render: Boolean(import.meta.env?.VITE_ISADMIN)
    },
    {
      to: "/bookmarks",
      text: "Bookmarks",
      icon: <BookmarkIcon className="h-4 w-4" />,
      render: true
    },
  ];

  const renderNavLinks = () =>
    navLinks.map((link, index) => (
      link.render && <NavLink
        key={index}
        to={link.to}
        className={({ isActive }) =>
          `sidebar-button ${getButtonClassName(isActive, isDarkTheme)}`
        }
      >
        {link.icon}
        {link.text}
      </NavLink>
    ));

  const getButtonClassName = (isActive, isDarkTheme) => {
    if (isDarkTheme) {
      return isActive
        ? "bg-white text-black hover:bg-gray-100 hover:text-gray-900"
        : "bg-gray-900 text-white hover:text-black";
    } else {
      return isActive
        ? "bg-black text-gray-100 hover:bg-gray-900 hover:text-gray-100"
        : "bg-gray-100 text-black";
    }
  };

  return (
    <Popover.Group className="mt-2 flex flex-col gap-2">
      {renderNavLinks()}
      <hr />
      <span className="mt-2 px-2 text-xs font-normal text-gray-500">
        Online
      </span>
      <OnlineLinks isDarkTheme={isDarkTheme} />
      <hr />
      <span className="mt-2 px-2 text-xs font-normal text-gray-500">
        Downloadable
      </span>
      <NavLink
        to={resume}
        target="_blank"
        className={`sidebar-button flex justify-between ${isDarkTheme ? "text-gray-100 hover:bg-gray-100 hover:text-gray-900" : "text-gray-900"}`}
      >
        Resume
        <ArrowDownOnSquareIcon
          className="h-4 w-4 animate-bounce"
          aria-hidden="true"
        />
      </NavLink>
    </Popover.Group>
  );
};

export default PopoverGroup;
