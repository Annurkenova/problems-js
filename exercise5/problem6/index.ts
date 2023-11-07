async function fetchPokemon(pokemonName: string) {
  try {
    // Используем fetch для выполнения запроса к PokeAPI.
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);

    // Проверяем, что статус ответа 200 (OK) перед продолжением.
    if (response.status === 200) {
      const data = await response.json();

      // Извлекаем необходимые данные о покемоне.
      const pokemon = {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        image: data.sprites.front_default,
      };

      return pokemon;
    } else {
      // Если статус ответа не 200, считаем запрос неудачным и возвращаем ошибку.
      return Promise.reject(new Error("smth went wrong"));
    }
  } catch (error) {
    // Ловим любые ошибки, которые могли возникнуть при выполнении запроса.
    return Promise.reject(new Error("smth went wrong"));
  }
}

export default fetchPokemon;
