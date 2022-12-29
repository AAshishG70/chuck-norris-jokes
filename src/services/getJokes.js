const getJokes = async () => {
  const dataJson = await fetch("https://api.chucknorris.io/jokes/random");
  const jokesData = await dataJson.json();
  return jokesData;
};

export default getJokes;
