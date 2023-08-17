import { Footer } from "./Footer";
import { PlayButton } from "./PlayButton";
import { Title } from "./Title";
import Image from "next/image";

interface CardProps {
  title: any;
  img: string;
  link: string;
  vote: any;
  date: string;
}

export function Card(props: CardProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Title vote={props.vote}>{props.title}</Title>

      <Image
        src={props.img}
        alt={'poster'}
        width={200}
        height={280}
        className="rounded-lg"
      />

      <Footer date={props.date} />
      
      <PlayButton link={props.link} />
    </div>
  );
}
