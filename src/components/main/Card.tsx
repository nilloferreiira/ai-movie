import { Footer } from "./Footer";
import { PlayButton } from "./PlayButton";
import { Title } from "./Title";
import Image from 'next/image'

interface CardProps {
    title: any,
    img: string,
    link: string
}

export function Card(props: CardProps) {
    return (
        <div className="w-1/3 flex flex-col justify-center items-center">
            <Title>{props.title}</Title>
            <Image
              src={
                props.img
              }
              alt={props.title}
              width={200}
              height={280}
              className="rounded-lg"
            />

            <Footer />
            <PlayButton link={props.link} />
          </div>
    )
}