import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[1]} />
    </div>
  );
}

export default App;

const pokemonList = [
  {
    name: "Pokemon_Arceus",
    imgSrc:
      "https://www.pokepedia.fr/images/thumb/2/26/Arceus-DEPS.png/250px-Arceus-DEPS.png",
  },
  {
    name: "mew",
    imgSrc: null,
  },
];
