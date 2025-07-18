import React from "react";
import Link from "next/link";

interface NavbarProps {
  toggleTeamDisplay: () => void;
  teamLength: number;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTeamDisplay, teamLength }) => {
  return (
    <header className="bg-yellow-600 text-black py-4 fixed top-0 left-0 w-full shadow-lg z-40">
      <nav className="container mx-auto flex flex-wrap justify-between items-center px-4 md:px-6">
        {/* Logo / Title */}
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl md:text-3xl font-bold">Pokédex</h1>
        </div>

        {/* Navigation Links – Hidden on small screens */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/" className="hover:text-gray-300">
            Teams
          </Link>
          <Link href="/" className="hover:text-gray-300">
            About
          </Link>
        </div>

        {/* View Team Button – Always visible if team exists */}
        {teamLength > 0 && (
          <button
            onClick={toggleTeamDisplay}
            className="mt-2 md:mt-0 px-4 py-2 bg-green-600 border border-black text-white rounded-lg shadow-lg shadow-black hover:bg-indigo-700 focus:outline-none flex items-center justify-center"
          >
            View Team
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
