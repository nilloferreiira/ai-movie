import useMovies from "@/hooks/useMovies";
import { Card } from "./Card";
import { PreviousMovies } from "./PreviousMovies";
interface MovieProps {
  movies: any[];
  previous: () => void;
  index: number;
}

export function Main(props: MovieProps) {
  const base_url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="grid grid-cols-3 gap-2 lg:gap-8 items-center w-full">
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
      {props.index > 2 && (
        <div className="flex justify-end col-span-3">
        <PreviousMovies previous={props.previous} />
        </div>
      )}
    </div>
      );
}
