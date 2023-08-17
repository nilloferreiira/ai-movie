import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { API_KEY } from "../config/key";

//interface changeprops () => void

export default function useMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  const [movies, setMovies] = useState<any[]>([{}]);
  const [index, setIndex] = useState(0);

  function handleNextMovies() {
    setIndex(index + 3);
  }

  useEffect(() => {
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        setMovies(data.results.slice(index, index + 3));
      });
  }, [index]);

  return { movies, handleNextMovies };
}
