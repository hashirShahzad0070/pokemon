import {ApiAxios} from "@/app/api-handlers/ApiAxios";

const getPokemon = async (id: string) => {
    try{
        const response = await ApiAxios.get(`/pokemon/${id}`);
        return response.data;
    }catch (error){
        console.error("Error fetching Pokemon data:", error);
        throw error;
    }
}

// services/pokemonService.ts


export const getPokemonSuggestions = async (query: string) => {
  if (query.length < 1) {
    return []; // Don't fetch suggestions for short inputs
  }

  try {
    const response = await ApiAxios.get(`/pokemon?limit=1000`);
    const data = response.data; // Get the data from the response

    const names = data.results.map((result: { name: string }) => result.name);

    const filteredSuggestions = names.filter((name: string) =>
      name.toLowerCase().includes(query.toLowerCase())
    );

    return filteredSuggestions;  // Return filtered names
  } catch (error) {
    console.error("Error fetching Pokémon suggestions:", error);
    return [];  
  }
};





export default getPokemon;
