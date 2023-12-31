import Image from "next/image";
import { Button } from "./Button";

interface ButtonProps {
  change: () => void;
  loading: boolean;
}

export function Header(props: ButtonProps) {
  return (
      <>
    <header className="flex items-center justify-between w-full mb-9">
      <div className="w-[50%]">
      <Image src={"/img/Logo.png"} alt={"Logo"} width={86} height={44} />
      </div>
      <Button change={props.change} loading={props.loading} />
    </header>
      </>
  );
}
