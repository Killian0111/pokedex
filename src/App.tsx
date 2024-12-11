import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <div>
      <PokemonCard name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc} />
    </div>
  );
}

const pokemonList = [
  {
    name: "Arceus",
    imgSrc:
      "https://www.pokepedia.fr/images/thumb/2/26/Arceus-DEPS.png/250px-Arceus-DEPS.png",
  },
  {
    name: "mew",
    imgSrc: null,
  },
];

export default App;
