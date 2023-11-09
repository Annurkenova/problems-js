interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  image: string;
}

async function fetchPokemons(pokemonNames: string[]): Promise<Pokemon[]> {
  try {
    const pokemonData: Pokemon[] = await Promise.all(
      pokemonNames.map(async (name) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        
        if (!response.ok) {
          throw new Error("smth went wrong");
        }

        const pokemon = await response.json();
        return {
          id: pokemon.id,
          name: pokemon.name,
          height: pokemon.height,
          weight: pokemon.weight,
          image: pokemon.sprites?.front_default || "", // Use optional chaining
        };
      })
    );

    return pokemonData;
  } catch (error) {
    console.error(error);
    return Promise.reject(new Error("smth went wrong")); // Reject the promise with an error
  }
}

export default fetchPokemons;