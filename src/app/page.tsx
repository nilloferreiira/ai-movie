//'use client'
// import { Ring } from "@uiball/loaders";
// <Ring size={40} lineWeight={5} speed={2} color="red" />

import Image from "next/image";
import { Button } from "./components/header/Button";

// <Image src={"https://pbs.twimg.com/media/FvUVt3hXgAAxP1H?format=jpg&name=900x900"} alt={"openheiniks"} width={200} height={280}/>

export default function Home() {
  return (
    <div className="w-[846px] flex flex-col items-center mx-auto mt-32 py-16 px-24 border-4 border-principal-pink rounded-lg bg-base-grayDark">
      <header className="flex items-center justify-between w-full mb-9">
        <Image src={"/img/Logo.png"} alt={"Logo"} width={86} height={44}/>
        <Button />
      </header>
      <main className="flex gap-8">
      <Image src={"https://pbs.twimg.com/media/FvUVt3hXgAAxP1H?format=jpg&name=900x900"} alt={"openheiniks"} width={200} height={280}/>
      <Image src={"https://pbs.twimg.com/media/FvUVt3hXgAAxP1H?format=jpg&name=900x900"} alt={"openheiniks"} width={200} height={280}/>
      <Image src={"https://pbs.twimg.com/media/FvUVt3hXgAAxP1H?format=jpg&name=900x900"} alt={"openheiniks"} width={200} height={280}/>
      </main>
    </div>
  );
}
