// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [jokes, setjokes] = useState([]);
//   useEffect(() => {
//     axios
//       .get("/api/jokes")
//       .then((response) => {
//         setjokes(response.data);
//         console.log(jokes);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });
//   return (
//     <>
//       <h1>frontend design</h1>
//       <p>jokes:{jokes.length}</p>
//       {jokes.map((joke) => {
//         return (
//           <div key={joke.id}>
//             <p>{joke.id}</p>
//             <p>{joke.des}</p>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export default App;
import useState, { useEffect } from "react";
import axios from "axios";
function App() {
  const [jokes, setjokes] = useState();
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setjokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <div>
        <h1>jokes are :</h1>
        <p>jokes length is : {jokes}</p>

        {jokes.map((joke) => {
          return (
            <div key={joke.id}>
              <h1>{joke.id}</h1>
              <p>{joke.des}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
