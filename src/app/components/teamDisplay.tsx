/* eslint-disable */

import React from "react";
import { TeamDisplayProps } from "../modal/pokemonInfo";
import TeamStats from "./teamStats";

const TeamDisplay: React.FC<TeamDisplayProps> = ({ team, removeFromTeam, closeTeamDisplay }) => {
  return (
    <div className="fixed top-0 right-0 h-full w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 sm:p-6 bg-gray-800 text-white overflow-y-auto shadow-lg rounded-none sm:rounded-l-3xl flex flex-col shadow-amber-100 z-50">
      
      <button
        onClick={closeTeamDisplay}
        className="absolute top-4 left-4 text-white text-3xl font-bold hover:text-gray-300 cursor-pointer transition-colors duration-200"
      >
        &times;
      </button>

      <h3 className="text-2xl font-bold mb-4 text-center mt-10 sm:mt-0">Your Team</h3>
      
      <ul className="space-y-4 flex-grow">
        {team.map((pokemon) => (
          <li
            key={pokemon.name}
            className="flex justify-between items-center bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-all"
          >
            <div className="flex items-center space-x-4">
              <img
                src={pokemon.sprites.back_shiny || "/background.jpg"}
                alt={pokemon.name}
                width={48}
                height={48}
                className="object-contain rounded-full border-2 border-gray-500"
              />
              <span className="text-lg font-semibold capitalize">{pokemon.name}</span>
            </div>
            <button
              onClick={() => removeFromTeam(pokemon.name)}
              className="text-red-500 hover:text-red-400 transition-colors duration-200"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {team.length === 6 && (
        <p className="text-red-500 mt-4 text-center">Team is full (6 Pokémon).</p>
      )}

      <div className="mb-20 text-center">
        <TeamStats team={team} />
      </div>
    </div>
  );
};

export default TeamDisplay;
