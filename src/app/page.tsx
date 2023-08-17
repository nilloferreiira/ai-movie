'use client'

// import { Ring } from "@uiball/loaders";
// <Ring size={40} lineWeight={5} speed={2} color="red" />
// criar um gif de process

import { Header } from "@/components/header/Header";
import { Main } from "@/components/main/Main";
import useMovies from "@/hooks/useMovies";

// arrumar layout

export default function Home() {
  const { movies, handleNextMovies } = useMovies();
  return (
    <div className="w-[900px] flex flex-col items-center mx-auto mt-32 py-16 px-20 border-4 border-principal-pink rounded-lg bg-base-grayDark">
      <Header change={handleNextMovies} />
      <main className="flex w-full items-center">
        <Main movies={movies}/>
      </main>
    </div>
  );
}
