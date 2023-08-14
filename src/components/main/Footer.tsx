'use client'

import { CalendarBlank, Clock } from "phosphor-react"

export function Footer() {
    return (
        <div className="flex justify-between text-base-grayLight py-2">
          <div className="flex gap-1">
          <Clock size={20}/>
            <span>1:54:20</span>
          </div>
        <div className="flex gap-1">
        <CalendarBlank size={20}/>
        <span>2023</span>
        </div>

        </div>
    )
}