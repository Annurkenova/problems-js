async function fetchPokemons(pokemonNames: string[]) {
  const promises = pokemonNames.map(async (name) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase}`);

      if (response.status === 200) {
        const data = await response.json();

        return {
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          image: data.sprites.front_default,
        };
      } else {
        throw new Error("smth went wrong"); // Ensure the error message matches the test expectations.
      }
    } catch (error) {
      throw new Error("smth went wrong"); // Ensure the error message matches the test expectations.
    }
  });

  try {
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    throw new Error("smth went wrong"); // Ensure the error message matches the test expectations.
  }
}

export default fetchPokemons;
