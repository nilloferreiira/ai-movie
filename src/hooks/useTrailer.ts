import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "@/config/key"; //mudar

export default function useTrailer(props: any) {
  // const API_KEY = process.env.API_KEY
  const [trailerLink, setTrailerLink] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props}/videos?api_key=${API_KEY}`
      )
      .then((response: any) => {
        if (response.status === 200) {
          const responseJson = response.data;
          setTrailerLink(responseJson.results[0].key);
          const trailers = responseJson.results.find(
            (video: { type: string }) => video.type === "Trailer"
          ).key;
          setTrailerLink(trailers)
        } 
        else {
          console.error(response.status);
        }
      });
  }, [props]);

  return { trailerLink };
}
