interface PokemonCardProps {
  pokemon: {
    name: string;
    imgSrc?: string | null;
  };
}
function PokemonCard({ pokemon }: PokemonCardProps) {
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
