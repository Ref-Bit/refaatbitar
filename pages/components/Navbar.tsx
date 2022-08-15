import axios from 'axios';
import { useEffect, useState } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import useSWR, { Fetcher } from 'swr';

interface Quote {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

const fetcher: Fetcher<Quote> = (url: string) =>
  axios.get(url).then(res => res.data);

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const { data, error } = useSWR<Quote, Error>(
    'https://api.quotable.io/random?maxLength=50',
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-7 md:w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#cv">Download CV</a>
            </li>
          </ul>
        </div>
      </div>

      {data ? (
        <div className="navbar-center flex flex-col text-sm md:text-xl justify-items-center items-center">
          <span className="normal-case font-title">
            {data ? data.content : 'Lorem ipsum'}
          </span>
          <a
            href={`https://en.wikipedia.org/wiki/${
              data ? data.author.replace(/\s/g, '_') : 'Refaat_Bitar'
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <cite className="text-indigo-600">
              {data ? data.author : 'Refaat Bitar'}
            </cite>
          </a>
        </div>
      ) : (
        <div className="navbar-center">
          <p className="text-red-500">{error?.message}</p>
        </div>
      )}
      <div className="navbar-end">
        <button
          className="btn btn-circle btn-ghost"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <IoSunnyOutline className="w-5 h-5 md:w-7 md:h-7 text-yellow-500" />
          ) : (
            <IoMoonOutline className="w-5 h-5 md:w-7 md:h-7 text-indigo-500" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
