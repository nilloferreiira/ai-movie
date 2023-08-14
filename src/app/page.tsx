"use client";
// import { Ring } from "@uiball/loaders";
// <Ring size={40} lineWeight={5} speed={2} color="red" />

import Image from "next/image";
import { Button } from "../components/header/Button";
import { Card } from "@/components/main/Card";

import useMovies from "@/hooks/useMovies";


// arrumar layout

export default function Home() {
    
  const { movies } = useMovies()
  return (
    <div className="w-[900px] flex flex-col items-center mx-auto mt-32 py-16 px-20 border-4 border-principal-pink rounded-lg bg-base-grayDark">
      <header className="flex items-center justify-between w-full mb-9">
        <Image src={"/img/Logo.png"} alt={"Logo"} width={86} height={44} />
        <Button />
      </header>
      <main className="flex-col w-full items-center">
        <div className="flex gap-10 justify-center items-center align-middle"> 
          {movies.map((movie) => {
            return (
                <Card
                  key={movie.id}
                  title={movie.title}
                  img={
                    "https://pbs.twimg.com/media/FvUVt3hXgAAxP1H?format=jpg&name=900x900"
                  }
                  link={""}
                />
            );
          })}
        </div>
      </main>
    </div>
  );
}
