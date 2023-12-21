"use client";

import { Header } from "@/components/header/Header";
import { Main } from "@/components/main/Main";
import useMovies from "@/hooks/useMovies";

export default function Home() {
  const { movies, index, loading, handleNextMovies, handlePreviousMovies } =
    useMovies();
  return (
    <div
      className={`
      lg:w-[50%]
      sm:w-full
      flex flex-col 
      items-center
      mx-auto mt-32 
      lg:py-16 lg:px-20
      py-8 px-8      
      border-4 border-principal-pink rounded-lg
      bg-base-grayLight
     `}
    >
      <Header change={handleNextMovies} loading={loading} />
      <main className="flex w-full items-center">
        <Main movies={movies} previous={handlePreviousMovies} index={index} />
      </main>
    </div>
  );
}
