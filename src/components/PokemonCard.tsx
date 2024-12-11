const pokemonList = [
  {
    name: "Pokemon_Arceus",
    imgSrc:
      "https://www.pokepedia.fr/images/thumb/2/26/Arceus-DEPS.png/250px-Arceus-DEPS.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
  const pokemon = pokemonList[1];

  return (
    <figure>
      <h2>{pokemon.name}</h2>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
    </figure>
  );
}

export default PokemonCard;
