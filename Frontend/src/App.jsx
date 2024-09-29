import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <h1>chai aur backend</h1>
      <p>jokes list is : {jokes.length}</p>

      {jokes.map((joke) => {
        <div key={joke.id}>
          <h1>{joke.id}</h1>
          <h3>{joke.name}</h3>
          <p>{joke.des}</p>
        </div>;
      })}
    </>
  );
}

export default App;
