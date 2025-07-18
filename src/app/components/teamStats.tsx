import React from "react";
import { PokemonData } from "../modal/pokemonInfo";

interface TeamStatsProps {
  team: PokemonData[];
}

const TeamStats: React.FC<TeamStatsProps> = ({ team }) => {
  const uniqueTypes = new Set<string>();
  let totalExperience = 0;

  team.forEach(pokemon => {
    pokemon.types.forEach(typeInfo => uniqueTypes.add(typeInfo.type.name));

    totalExperience += pokemon.base_experience;
  });

  const averageExperience = team.length ? totalExperience / team.length : 0;

  return (
    <div className="bg-gray-900  border border-gray-700 shadow-md shadow-amber-100 rounded-lg p-6 w-full max-w-md mt-6">
      <h3 className="text-2xl font-bold text-center mb-4">Team Overview</h3>
      <div className="mb-4">
        <p>
          <strong>Total Unique Types Covered:</strong> {uniqueTypes.size}
        </p>
        <p>
          <strong>Types:</strong> {Array.from(uniqueTypes).join(", ")}
        </p>
      </div>
      <div>
        <p>
          <strong>Average Base Experience:</strong>{" "}
          {averageExperience.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default TeamStats;
