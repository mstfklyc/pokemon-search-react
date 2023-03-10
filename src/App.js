import { useEffect, useState } from "react";
import PokemonList from "./Components/PokemonList";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokeData, setPokeData] = useState([]);
  const [input, setInput] = useState("");
  const [isChosen, setIsChosen] = useState(false);
  const [searchText, setSearchText] = useState("Search a pokemon")

  const getData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => setPokeData(data))
      .catch((err) => console.log(err.message));


  };

  return (
    <div className="App">
      <header className="search-header">
        <h1>Pokemon Search</h1>
        <input
          placeholder="Enter A Pokemon name"
          onChange={(e) => setPokemonName(e.target.value)}
        ></input>
        <button disabled={!pokemonName}
          onClick={() => {
            getData();
            setIsChosen(true);
          }}
          className="btn-search"
        >
          Search
        </button>
      </header>
      {
        isChosen ? (
          <PokemonList pokeData={pokeData} isChosen={isChosen} />
        ) : (
          <h1 className="search-text">{searchText}</h1>
        )
      }
    </div >
  );
}

export default App;
