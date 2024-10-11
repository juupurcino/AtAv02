import Image from "next/image";

import inicial from "@/assets/inicial.png";


export default function Home() {
  return (
    <>
    
        <div className="flex justify-center items-center">
        <Image src={inicial} alt="imagem" className="w-10/12 mt-14"/>
        </div>

    </>
  );
}