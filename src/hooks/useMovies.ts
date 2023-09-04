import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import useLoading from "./useLoading";

export default function useMovies() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  const { loading, startLoad, finishLoad } = useLoading()

  
  const [movies, setMovies] = useState<any[]>([{}]);
  const [index, setIndex] = useState(0);

  function handleNextMovies() {
    setIndex(index + 3);
  }

  function handlePreviousMovies() {
    setIndex(index - 3);
  }

  useEffect(() => {
      startLoad()
        axios
          .get(url)
          .then((response) => response.data)
          .then((data) => {
            setMovies(data.results.slice(index, index + 3));
          })
        .finally(() => {
        finishLoad()
        });
  }, [index]);

  return { movies, index, loading, handleNextMovies, handlePreviousMovies };
}
