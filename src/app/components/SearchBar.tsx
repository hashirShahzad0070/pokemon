import React, { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";
import { getPokemonSuggestions } from "@/app/api-handlers/services/pokemon.service"; 

interface SearchBarProps {
  pokemonName: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: (e: React.FormEvent) => void;
  setPokemonName: (name: string) => void; 
}

const SearchBar: React.FC<SearchBarProps> = ({
  pokemonName,
  handleSearchChange,
  handleSearchSubmit,
  setPokemonName
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (pokemonName.length < 1) {
        setSuggestions([]);
        return;
      }

      const results = await getPokemonSuggestions(pokemonName);
      setSuggestions(results);
    };

    fetchSuggestions();
  }, [pokemonName]);

  const handleSuggestionClick = (name: string) => {
    setPokemonName(name);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full">
      <form
        onSubmit={handleSearchSubmit}
        className="mb-2 flex items-center space-x-2"
        autoComplete="off"
      >
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => {
            handleSearchChange(e);
            setShowSuggestions(true);
          }}
          placeholder="Search Pokémon"
          className="w-full text-black px-4 py-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-4 rounded-lg bg-blue-600 border border-black shadow-black text-white shadow-md hover:bg-indigo-700 focus:outline-none flex items-center justify-center cursor-pointer"
        >
          <SearchIcon size={20} className="mr-2" />
          <span className="sr-only">Search</span>
        </button>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <ul className="z-10 absolute  bg-white text-black border border-gray-300 rounded-md shadow-md max-h-48 overflow-y-auto w-full">
          {suggestions.map((name) => (
            <li
              key={name}
              onClick={() => handleSuggestionClick(name)}
              className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
