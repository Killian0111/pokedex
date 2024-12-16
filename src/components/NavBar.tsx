interface Pokemon {
  name: string;
  imgSrc?: string | null;
}

interface NavBarProps {
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button
          type="button"
          key={pokemon.name}
          onClick={() => {
            setPokemonIndex(index);
            if (pokemon.name === "pikachu") {
              alert("pika pikachu !!!");
            }
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}
export default NavBar;
