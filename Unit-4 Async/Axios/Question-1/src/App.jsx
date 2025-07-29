/** @format */

import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [movieArr, setMovieArr] = useState([]);

  async function fetchMovies() {
    try {
      let res = await axios.get(
        "https://movie-b2003-default-rtdb.firebaseio.com/movies.json"
      );
      let movieData = Object.entries(res.data).map(([id, movie]) => ({
        id,
        ...movie,
      }));
      setMovieArr(movieData);
    } catch (error) {
      console.log(error);
    }
  }

  async function addMovie() {
    // const movie = {name,image}

    await axios.post(
      "https://movie-b2003-default-rtdb.firebaseio.com/movies.json",
      { name: name, image: image }
    );
    console.log(movieArr);
    setName("");
    setImage("");
    fetchMovies();
  }

  return (
    <>
      <button onClick={fetchMovies}>Fetch Movie</button>
      <div>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Movie"
        />
        <input
          onChange={(e) => setImage(e.target.value)}
          type="url"
          placeholder="Paste Image URL"
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>

      <ul>
        {movieArr.map((item, index) => (
          <>
            <li>
              <span>
                <img src={item.image} alt={item.name} />
              </span>
            </li>
            <li key={index}>{item.name}</li>
          </>
        ))}
      </ul>
    </>
  );
}

export default App;
