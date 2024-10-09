"use client";

import {useEffect, useState, Suspense } from "react";

import Image from "next/image";

interface IData {
    
    id: string
    name: string,
    image: string,
    ki: string,
    race: string

}

const FetchPage = () => {

    const [characters, setcharacters] = useState<IData[]>([])

    useEffect(() => {
      const load = async () => {
        const res = await fetch("https://dragonball-api.com/api/characters");
        const data = await res.json();
        setcharacters(data.items);
        console.log(data);
      }
    
      load();

    }, [])

    return(

        <>
            <h1>Characters Disney</h1>
            <div className="flex flex-wrap justify-center items-center">
            <Suspense fallback={<div>Loading...</div>}>
                {characters.map((item) => {
                    return (
                        <div key={item.id} className="w-64 m-8">
                            <Image className="w-48 h-72 object-contain" src={item.image} alt="sla" width={200} height={200}/>
                            <h2>{item.name}</h2>
                            <h2>{item.ki}</h2>
                            <h2>{item.race}</h2>
          
                        </div>
                    )
                })}
            </Suspense>
            </div>
        </>
    )
    
}

export default FetchPage;