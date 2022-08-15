import { useEffect, useState } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <span className="btn btn-ghost normal-case text-xl">Refaat Bitar</span>
      </div>
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <IoSunnyOutline size="2rem" />
          ) : (
            <IoMoonOutline size="2rem" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
