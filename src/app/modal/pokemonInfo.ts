export interface PokemonType {
  type: {
    name: string;
  };
}


// pokemonInfo.ts
export interface PokemonSprites {
  front_default: string;  // Front sprite is required
  back_default?: string;  // Back sprite is optional
  back_female?: string;   // Optional back sprite for female
  back_shiny?: string;    // Optional back shiny sprite
  back_shiny_female?: string;  // Optional back shiny sprite for female
  front_female?: string; // Optional front sprite for female
  front_shiny?: string;  // Optional front shiny sprite
  front_shiny_female?: string;  // Optional front shiny sprite for female
}

// Define the type for the Pokemon data
export interface PokemonData {
  name: string;  // The name of the Pokémon
  sprites: PokemonSprites;  // The sprites associated with the Pokémon
  types: PokemonType[];  // An array of types the Pokémon has
  base_experience: number;  // The base experience of the Pokémon
}
export interface TeamDisplayProps {
  team: PokemonData[]; // Array of Pokémon in the team
  removeFromTeam: (pokemonName: string) => void; // Function to remove a Pokémon
  closeTeamDisplay: () => void; // Function to close the TeamDisplay
}


export interface SearchBarProps {
  pokemonName: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: (e: React.FormEvent) => void;
  setSearchQuery: (query: string) => void; // Function to set the search query in the parent component
}