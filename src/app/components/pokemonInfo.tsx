"use client";

import { useEffect, useState } from "react";
import getPokemon from "../api-handlers/services/pokemon.service";
import { PokemonData } from "../modal/pokemonInfo";
import SearchBar from "./SearchBar";
import PokemonInfoCard from "./PokemonInfoCard";
import AddToTeamButton from "./AddToTeamBtn";
import ErrorMessage from "./ErrorMessage";
import TeamDisplay from "./teamDisplay"; 
import Navbar from "./navbar"; 

const PokemonCard: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pokemonName, setPokemonName] = useState<string>(""); 
  const [searchQuery, setSearchQuery] = useState<string>(""); 

  const [team, setTeam] = useState<PokemonData[]>([]);

  const [isTeamDisplayOpen, setIsTeamDisplayOpen] = useState<boolean>(false);

  const toggleTeamDisplay = () => {
    setIsTeamDisplayOpen((prev) => !prev);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pokemonName.trim()) {
      setSearchQuery(pokemonName.toLowerCase()); 
    }
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      if (searchQuery === "") return;

      try {
        setLoading(true);
        setError(null);
        const data = await getPokemon(searchQuery);
        setPokemonData(data);
      } catch (error) {
        setError("No Pokémon found. Please check the name and retry.");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [searchQuery]);

  const addToTeam = () => {
    if (team.length >= 6) {
      setError("You can only add up to 6 Pokémon to your team.");
      return;
    }
    if (pokemonData && !team.some((poke) => poke.name === pokemonData.name)) {
      setTeam([...team, pokemonData]);
      setIsTeamDisplayOpen(true); 
    } else {
      setError("This Pokémon is already in your team.");
    }
  };

  const removeFromTeam = (pokemonName: string) => {
    setTeam(team.filter((poke) => poke.name !== pokemonName));
  };

  // Retry the search
  const retrySearch = () => {
    setError(null);
    setPokemonData(null);
    setPokemonName(""); 
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <ErrorMessage message={error} retrySearch={retrySearch} />;
  }

  if (!pokemonData) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-cover bg-center p-6" style={{ backgroundImage: "url('./background.jpg')" }}>
        <div className="bg-white rounded-2xl p-8 w-full max-w-3xl border-4 border-green-600 shadow-lg shadow-yellow-700">
          <SearchBar
            pokemonName={pokemonName}
            handleSearchChange={handleSearchChange}
            handleSearchSubmit={handleSearchSubmit}
              setPokemonName={setPokemonName} 

          />
          <div className="text-center text-gray-500 mt-6">
            <p>Please search for a Pokémon!</p>
          </div>
        </div>
      </div>
    );
  }

  const { name, sprites, types } = pokemonData;
  const pokemonImage = sprites?.front_default || "";
  const pokemonTypes = types.map((typeInfo) => typeInfo.type.name);

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center p-6" style={{ backgroundImage: "url('./background.jpg')" }}>
      <Navbar toggleTeamDisplay={toggleTeamDisplay} teamLength={team.length} />
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">
        <SearchBar
          pokemonName={pokemonName}
          handleSearchChange={handleSearchChange}
          handleSearchSubmit={handleSearchSubmit}
            setPokemonName={setPokemonName} 

        />
        <PokemonInfoCard name={name} image={pokemonImage} types={pokemonTypes} />
        <AddToTeamButton addToTeam={addToTeam} />
        
        {team.length > 0 ? (
          <button
            onClick={toggleTeamDisplay}
            className="w-full px-4 py-3 cursor-pointer bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none mt-4"
          >
            View Team
          </button>
        ) : (
          <p className="text-center text-gray-500 mt-4">Add a Pokémon to your team to view it.</p>
        )}
      </div>

      {isTeamDisplayOpen && (
        <div className="fixed ">
          <TeamDisplay team={team} removeFromTeam={removeFromTeam} closeTeamDisplay={toggleTeamDisplay} />
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
