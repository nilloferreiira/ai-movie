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
    <div className={`
    grid 
    lg:grid-cols-3
    md:grid-cols-3
    grid-cols-1
    gap-2 
    lg:gap-8
    items-center
    w-full
      `}>
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
        <div className="flex justify-center lg:justify-end md:justify-end lg:col-span-3 md:col-span-3 col-span-1 lg:mt-1 md:mt-2 mt-4">
        <PreviousMovies previous={props.previous} />
        </div>
      )}
    </div>
      );
}
