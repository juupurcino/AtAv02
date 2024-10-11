"use client";

import {useEffect, useState, Suspense } from "react";

import Image from "next/image";
import { Card } from "@/components/card";

interface IData {
    
    id: string
    name: string,
    image: string,
    ki: string,
    race: string,
    affiliation: string;
    gender: string;

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
            <div className="flex flex-wrap justify-center items-center">
            <Suspense fallback={<div>Loading...</div>}>
                {characters.map((item) => {
                    return (
                        <div key={item.id} className="w-64 m-8">
                            <Card imagem={item.image} nome={item.name} genero={item.gender} raca={item.race} ki={item.ki} afiliacao={item.affiliation}></Card>
                        </div>
                    )
                })}
            </Suspense>
            </div>
        </>
    )
    
}

export default FetchPage;