import { CheckIcon } from "@heroicons/react/24/outline";

const Home = ({isDarkTheme}) => {
  return (
    <div className={`mx-auto lg:w-1/2 ${isDarkTheme ? "text-gray-100" : "text-gray-900"}`}>
      <p className="mb-2 flex items-center text-lg font-bold">
        Hi! I'm Emre 👋
      </p>
      <p className="">
        I work as a Software Engineer at Pitcher AG and actively use
        technologies such as{" "}
        <span className="font-bold bg-gray-700 text-white px-1">
          VUEJS, SQL, PHP, JQUERY, JAVASCRIPT, VUETIFY
        </span>
        , as well as{" "}
        <span className="font-bold bg-gray-700 text-white px-1">
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
        <li className="mb-2 flex gap-1 items-center">
          {" "}
          <CheckIcon className="h-4 w-4 text-blue-400" /> Software Development Processes
        </li>
        <li className="mb-2 flex gap-1 items-center">
          {" "}
          <CheckIcon className="h-4 w-4 text-blue-400" /> New Technliogy Trends
        </li>
        <li className="mb-2 flex gap-1 items-center">
          {" "}
          <CheckIcon className="h-4 w-4 text-blue-400" /> Problem Solving Approaches
        </li>
        <li className="mb-2 flex gap-1 items-center">
          {" "}
          <CheckIcon className="h-4 w-4 text-blue-400" /> My Experiences and Lessons Learned
          from Mistakes
        </li>
        <li className="mb-2 flex gap-1 items-center">
          {" "}
          <CheckIcon className="h-4 w-4 text-blue-400" /> Inspiring Project Examples
        </li>
      </ul>
    </div>
  );
};

export default Home;
