async function fetchPokemon(pokemonName: string) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);

    if (response.status === 200) {
      const data = await response.json();


      const pokemon = {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        image: data.sprites.front_default,
      };

      return pokemon;
    } else {
      return Promise.reject(new Error("smth went wrong"));
    }
  } catch (error) {
    return Promise.reject(new Error("smth went wrong"));
  }
}

export default fetchPokemon;
