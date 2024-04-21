import { useEffect } from "react";
import axios from "axios";
import { ArrowUpRightIcon, CheckIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Home = ({ isDarkTheme }) => {
  const [repos, setRepos] = useState([]);
  const githubDetails = () => {
    axios
      .get("https://api.github.com/users/ecsabanci/repos")
      .then((response) => {
        let details = response.data;
        details = details.sort(
          (a, b) => new Date(b.pushed_at) - new Date(a.pushed_at),
        );
        setRepos(details);
      })
      .catch((error) => {
        console.error(error);
        // Handle the error, e.g., show an error message
      });
  };

  useEffect(() => {
    githubDetails();
  }, []);

  return (
    <div
      className={`mx-auto lg:w-1/2 ${isDarkTheme ? "text-gray-100" : "text-gray-900"}`}
    >
      <p className="mb-2 flex items-center text-lg font-bold">
        Hi! I'm Emre 👋
      </p>
      <p className="">
        I work as a Software Engineer at Pitcher AG and actively use
        technologies such as{" "}
        <span className="bg-gray-700 px-1 font-bold text-white">
          VUEJS, SQL, PHP, JQUERY, JAVASCRIPT, VUETIFY
        </span>
        , as well as{" "}
        <span className="bg-gray-700 px-1 font-bold text-white">
          REACTJS, NODEJS, EXPRESSJS, MONGODB, SUPABASE
        </span>
        . Over the years of my interest and passion for the software world, I
        have been involved in many projects and written code to solve countless
        problems. With the experience I have gained in this process, I maintain
        my commitment to continuous learning and development in the software
        world.
      </p>
      <p className="mb-2 mt-8 flex items-center text-lg font-bold">
        What You Will Find 🌐
      </p>
      <ul>
        <li className="mb-2 flex items-center gap-1">
          {" "}
          <CheckIcon className="h-4 w-4 text-indigo-500" /> Software Development
          Processes
        </li>
        <li className="mb-2 flex items-center gap-1">
          {" "}
          <CheckIcon className="h-4 w-4 text-indigo-500" /> New Technliogy Trends
        </li>
        <li className="mb-2 flex items-center gap-1">
          {" "}
          <CheckIcon className="h-4 w-4 text-indigo-500" /> Problem Solving
          Approaches
        </li>
        <li className="mb-2 flex items-center gap-1">
          {" "}
          <CheckIcon className="h-4 w-4 text-indigo-500" /> My Experiences and
          Lessons Learned from Mistakes
        </li>
        <li className="mb-2 flex items-center gap-1">
          {" "}
          <CheckIcon className="h-4 w-4 text-indigo-500" /> Inspiring Project
          Examples
        </li>
      </ul>
      <p className="mb-2 mt-8 flex items-center gap-2 text-lg font-bold">
        Github Repos 💾
      </p>
      <ul className="h-96 overflow-y-scroll">
        {repos
          ? repos.map((repo) => (
              <NavLink to={repo.html_url} target="_blank" className="flex items-center gap-2 mb-4" key={repo.id}>
                <span className="h-3 w-3 rounded-full bg-indigo-500"></span>
                {repo.name}{" "}
                <ArrowUpRightIcon className="h-4 w-4" />
              </NavLink>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Home;
