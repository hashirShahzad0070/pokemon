import React, { useState } from "react";
import { PokemonData } from "../modal/pokemonInfo";


interface TeamManagementProps {
  setActiveTeamIndex: React.Dispatch<React.SetStateAction<number | null>>;
  activeTeamIndex: number | null;
  teams: { name: string; team: PokemonData[] }[];
  setTeams: React.Dispatch<React.SetStateAction<{ name: string; team: PokemonData[] }[]>>;
}

const TeamManagement: React.FC<TeamManagementProps> = ({
  setActiveTeamIndex,
  teams,
  setTeams,
}) => {
  const [newTeamName, setNewTeamName] = useState<string>("");

  const createNewTeam = () => {
    if (!newTeamName.trim()) {
      alert("Please enter a valid team name.");
      return;
    }
    const newTeam = { name: newTeamName, team: [] };
    setTeams([...teams, newTeam]);
    setNewTeamName(""); 
    setActiveTeamIndex(teams.length); 
  };

  const switchTeam = (index: number) => {
    setActiveTeamIndex(index);
  };

  const deleteTeam = (index: number) => {
    const updatedTeams = teams.filter((_, i) => i !== index);
    setTeams(updatedTeams);
    setActiveTeamIndex(null); 
  };

  const renameTeam = (index: number, newName: string) => {
    const updatedTeams = [...teams];
    updatedTeams[index].name = newName;
    setTeams(updatedTeams);
  };

  return (
    <div className="absolute top-6 left-6 p-6 bg-white shadow-lg rounded-lg w-64">
      <h3 className="text-xl font-bold mb-4 text-black">Manage Teams</h3>
      <div>
        <input
          type="text"
          value={newTeamName}
          onChange={(e) => setNewTeamName(e.target.value)}
          placeholder="New Team Name"
          className="w-full text-black px-4 py-2 mb-4 border border-gray-300 rounded-lg"
        />
        <button
          onClick={createNewTeam}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg mb-4"
        >
          Create New Team
        </button>
        <ul>
          {teams.map((team, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span
                className="cursor-pointer text-blue-500"
                onClick={() => switchTeam(index)}
              >
                {team.name}
              </span>
              <button
                onClick={() => deleteTeam(index)}
                className="text-red-500"
              >
                Delete
              </button>
              <button
                onClick={() => renameTeam(index, prompt("New name for the team", team.name) || team.name)}
                className="text-yellow-500 ml-2"
              >
                Rename
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamManagement;
