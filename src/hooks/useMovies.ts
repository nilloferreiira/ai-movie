import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from '../config/key'

export default function useMovies() {
    
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    const [movies, setMovies] = useState<any[]>([{}]);
  
    useEffect(() => {
      axios
        .get(url)
        .then((response) => response.data)
        .then((data) => setMovies(data.results.slice(0, 3))); // mudar esse slice(0, 3) de forma aleatorica depois!!
                                                              // usa o chat ja exsitente no gpt para perguntar
    }, []);

    return { movies }
}