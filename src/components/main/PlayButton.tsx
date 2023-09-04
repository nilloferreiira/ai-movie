"use client";

import { Play } from "phosphor-react";
import useTrailer from "@/hooks/useTrailer";

interface PlayProps {
  idLink: string;
}

export function PlayButton(props: PlayProps) {
  const { trailerLink } = useTrailer(props.idLink);

  return (
    <a
      href={`https://www.youtube.com/watch?app=desktop&v=${trailerLink}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-3 items-center bg-base-grayMid p-2 rounded-md"
    >
      <div className="bg-base-grayDark text-principal-purple rounded-full p-2 w-8 h-8 flex items-center justify-center">
        <Play size={24} weight="fill" />
      </div>
      <div className="text-white">Assistir ao trailer</div>
    </a>
  );
}
