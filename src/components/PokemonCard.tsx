interface PokemonCardProps {
  name: string;
  imgSrc?: string | null;
}

function PokemonCard({ name, imgSrc }: PokemonCardProps) {
  return (
    <figure>
      <h2>{name}</h2>
      {imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
    </figure>
  );
}

export default PokemonCard;
