import { Link } from "react-router-dom";

function Links() {
  return (
    <div className="h-60 m-20 flex flex-row space-x-20 justify-center items-center bg-white">
      {/* <Model /> */}
      <a
        href="../images/JackTransueResume032722.pdf"
        target="_blank"
        className="github up py-4 px-10 text-white bg-black rounded-full lg:text-3xl md:text-2xl sm:text-xl hover:bg-yellow-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex items-center"
      >
        Resume
      </a>
      <Link
        to="/github"
        className="github up py-4 px-10 text-white bg-black rounded-full lg:text-3xl md:text-2xl sm:text-xl hover:bg-yellow-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex items-center"
      >
        Github
      </Link>
      <Link
        to="/linkedin"
        className="LinkedIn up py-4 px-10 text-white bg-black rounded-full lg:text-3xl md:text-2xl sm:text-xl hover:bg-yellow-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex items-center"
      >
        LinkedIn
      </Link>
    </div>
  );
}

export default Links;
