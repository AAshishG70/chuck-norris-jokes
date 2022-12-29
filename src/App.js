import { useEffect, useState } from "react";
import getJokes from "./services/getJokes";
import Card from "./components/Card";

function App() {
  const [joke, setJoke] = useState([]);

  function NextButton() {
    getJokes().then((res) => setJoke(res));
  }

  useEffect(() => {
    getJokes().then((res) => setJoke(res));
  }, []);

  const value = joke.value;

  return (
    <>
      <Card value={value} nextButton={NextButton} />
    </>
  );
}

export default App;
