import { Suspense } from "react";
import Link from "next/link";

type IData = {
    items: {
        name: string;
        id: string;
    }[];
};

const ServerSide = async () => {
    const res = await fetch("https://dragonball-api.com/api/characters/");
    const data: IData = await res.json();
    
    return (
        <div className="flex flex-col mt-10 items-center w-full h-screen">
            <Suspense fallback={<div>Loading...</div>}>
                {data.items.map((item) => {
                    return (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <Link href={`/person/${item.id}`}>ABRIR</Link>
                        </div>
                    );
                })}
            </Suspense>
        </div>
    );
};

export default ServerSide;