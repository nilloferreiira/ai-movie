import { Star } from "phosphor-react";

interface TitleProps {
  children: any;
  vote: any;
}

// arrumar grid imagem e titulo

export function Title(props: TitleProps) {
  return (
    <div className="flex items-center justify-center py-4 h-[4em] w-full overflow-hidden">
      <h1 className="font-black text-xl text-white truncate">{props.children}</h1>
      <div className="flex gap-1 items-center text-principal-yellow">
        <Star size={20} weight={"fill"} />
        <span>{props.vote}</span>
      </div>
    </div>
  );
}
