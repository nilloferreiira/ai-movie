'use client'

import { Play } from "phosphor-react";

interface PlayProps {
    link: string
}

export function PlayButton(props: PlayProps) {
    return (
        <a href={props.link} className="flex gap-3 items-center bg-base-grayMid p-2 rounded-md">
            <div className="bg-base-grayDark text-principal-purple rounded-full p-2 w-8 h-8 flex items-center justify-center">
            <Play size={24} weight="fill"/>
            </div>
            <div className="text-white">Assistir ao trailer</div>
        </a>
    )
}