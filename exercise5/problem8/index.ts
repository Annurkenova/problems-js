async function fetchCharacterWithMovies(characterId: number): Promise<any> {
  const apiUrl = `https://swapi.dev/api/people/${characterId}/`;

  try {
    const characterResponse = await fetch(apiUrl);
    if (!characterResponse.ok) {
      throw new Error("smth went wrong");
    }

    const characterData = await characterResponse.json();
    const films = await Promise.all(
      characterData.films.map(async (filmUrl: string) => {
        const filmResponse = await fetch(filmUrl);
        if (!filmResponse.ok) {
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
