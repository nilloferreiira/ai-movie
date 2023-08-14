'use client'

import { Star } from "phosphor-react";


export function Title(props: any) {
    return (
        <div className="flex items-center justify-between py-4">
            <h1 className="font-black text-xl text-white">{props.children}</h1>

          <div className="flex gap-1 items-center text-principal-yellow">  
            <Star size={20} weight={'fill'}/>
            <span>4.9</span>
            </div>
          </div>
    )
}