'use client'

import { Lightning } from "phosphor-react"

//hook para chamar API

export function Button() {
    return (
        <button className="flex items-center px-4 py-2 rounded-lg text-white gap-2 bg-gradient-to-r from-principal-purple to-principal-pink hover:bg-gradient-to-l transition-all">
            Nova recomendação
            <Lightning size={32} className="rounded-full p-2 bg-principal-pink" weight="bold"/>
        </button>
    )
}