async function fetchCharacterWithMovies(characterId: number): Promise<any> {
  const apiUrl = `https://swapi.dev/api/people/${characterId}/`;

  try {
    // Fetch character information
    const characterResponse = await fetch(apiUrl);
    if (!characterResponse.ok) {
      // If the response is not successful (e.g., 404), throw an error
      throw new Error("smth went wrong");
    }

    const characterData = await characterResponse.json();

    // Fetch films
    const films = await Promise.all(
      characterData.films.map(async (filmUrl: string) => {
        const filmResponse = await fetch(filmUrl);
        if (!filmResponse.ok) {
          // If the film response is not successful (e.g., 404), throw an error
          throw new Error("smth went wrong");
        }
        const filmData = await filmResponse.json();
        return filmData.title;
      })
    );

    const result = {
      name: characterData.name,
      films: films,
    };

    return result;
  } catch (error) {
    return Promise.reject(new Error("smth went wrong"));
  }
}

export default fetchCharacterWithMovies;
