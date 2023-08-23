import useMovies from "@/hooks/useMovies";
import { Card } from "./Card";

interface MovieProps {
  movies: any[];
}

export function Main(props: MovieProps) {
  const base_url = "https://image.tmdb.org/t/p/original";

  return (
    <div className="grid gap-8 grid-cols-3 items-center w-full">
      {props.movies.map((movie) => {
        return (
          <div key={movie.id} className="flex items-center justify-center">
            <Card
            key={movie.id}
              title={movie.title}
              vote={movie.vote_average}
              img={`${base_url}${movie.poster_path}`}
              idLink={movie.id}
              date={movie.release_date}
            />
          </div>
        );
      })}
    </div>
  );
}
