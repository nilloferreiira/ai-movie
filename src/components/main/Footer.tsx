"use client";

import { CalendarBlank } from "phosphor-react";
interface FooterProps {
  date: any;
}

export function Footer(props: FooterProps) {
  const date = new Date(props.date);

  function FormatDate(date: any) {
    const year = date.getFullYear();

    return year;
  }

  const formatedDate = FormatDate(date);

  return (
    <div className="w-full flex justify-center gap-1 items-center text-base-grayLight py-2">
      <CalendarBlank size={20} />
      <span>{formatedDate}</span>
    </div>
  );
}
