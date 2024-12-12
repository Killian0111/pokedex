import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickPrécédent = () => {
    if (pokemonIndex > 0) setPokemonIndex(pokemonIndex - 1);
  };

  const handleClickSuivant = () => {
    if (pokemonIndex < pokemonList.length - 1)
      setPokemonIndex(pokemonIndex + 1);
  };
  const currentPokemon = pokemonList[pokemonIndex];

  return (
    <div>
      <h1>{pokemonIndex}</h1>

      {pokemonIndex > 0 && (
        <button type="button" onClick={handleClickPrécédent}>
          Précédent
        </button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button type="button" onClick={handleClickSuivant}>
          Suivant
        </button>
      )}
      <PokemonCard name={currentPokemon.name} imgSrc={currentPokemon.imgSrc} />
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
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
    imgSrc: null,
  },
];

export default App;
