export default function PokemonList({ pokeData }) {
  return (
    <div className="poke-container">
      <h1>{pokeData.name}</h1>
      <div className="poke-img">
        {pokeData.sprites ? (
          <img
            src={pokeData.sprites.other.dream_world.front_default}
            className="pokemon-img"
            alt="pokemon-img"
          ></img>
        ) : (
          ""
        )}
      </div>
      {pokeData.stats ? (
        <p>
          <b>HP:</b>
          {pokeData.stats[0].base_stat}
        </p>
      ) : (
        ""
      )}
      {pokeData.stats ? (
        <p>
          <b>Attack:</b>
          {pokeData.stats[1].base_stat}
        </p>
      ) : (
        ""
      )}
      {pokeData.stats ? (
        <p>
          <b>Defence:</b>
          {pokeData.stats[2].base_stat}
        </p>
      ) : (
        ""
      )}
      {pokeData.stats ? (
        <p>
          <b>Special Attack:</b>
          {pokeData.stats[3].base_stat}
        </p>
      ) : (
        ""
      )}
      {pokeData.stats ? (
        <p>
          <b>Special Defense:</b>
          {pokeData.stats[4].base_stat}
        </p>
      ) : (
        ""
      )}
      {pokeData.stats ? (
        <p>
          <b>Speed</b>
          {pokeData.stats[4].base_stat}
        </p>
      ) : (
        ""
      )}
      {pokeData.weight ? (
        <p>
          {" "}
          <b>Weight:</b> {pokeData.weight}
        </p>
      ) : (
        ""
      )}
      {pokeData.types ? (
        <p>
          <b>Type:</b> {pokeData.types[0].type.name}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
