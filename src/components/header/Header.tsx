import Image from "next/image";
import { Button } from "./Button";

interface ButtonProps {
  change: () => void;
}

export function Header(props: ButtonProps) {
  return (
    <header className="flex items-center justify-between w-full mb-9">
      <Image src={"/img/Logo.png"} alt={"Logo"} width={86} height={44} />
      <Button change={props.change} />
    </header>
  );
}
