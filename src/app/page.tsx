import PokemonCard from "./components/pokemonInfo";

export default function Home() {
  return (
    <main className="flex flex-col justify-between flex-grow">
      <PokemonCard />
    </main>
  );
}
