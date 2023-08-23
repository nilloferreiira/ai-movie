import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "@/config/key";

// interface useTrailerProps {
//     id: string
// }

export default function useTrailer(props: any) {
  const [trailerLink, setTrailerLink] = useState();

  useEffect(() => {
    axios.get(
      `https://api.themoviedb.org/3/movie/${props}/videos?api_key=${API_KEY}`
    ).then((response: any) => {
      if (response.status === 200) {
        const responseJson = response.data;
        setTrailerLink(responseJson.results[0].key);
      } else {
        console.error(response.status);
      }
    });
  }, [props]);

  return { trailerLink }
  
}


