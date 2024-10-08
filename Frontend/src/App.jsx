import useState from "react";

function App() {
  const [jokes, setjokes] = useState();
  return (
    <>
      <h1>frontend design</h1>
      <p>jokes:{jokes.length}</p>
      {jokes.map((joke, index) => {
        return (
          <div key={joke.id}>
            <h1>{joke.id}</h1>
            <h2>{joke.des}</h2>
          </div>
        );
      })}
    </>
  );
}

export default App;
