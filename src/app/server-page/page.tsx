import { Suspense } from "react";
import Link from "next/link";

type IData = {
    items: {
        name: string;
        id: string;
    }[];
};

const ServerSide = async () => {
    const res = await fetch("https://dragonball-api.com/api/characters?page=1&limit=58");
    const data: IData = await res.json();
    
    return (
        <div className="flex flex-row p-4 items-center flex-wrap justify-center">
            <Suspense fallback={<div>Loading...</div>}>
                {data.items.map((item) => {
                    return (
                            <Link key={item.id} href={`/person/${item.id}`} className="hover:scale-125 transition duration-500 ease-in-out flex flex-col justify-center items-center m-6 w-[200px] h-56 bg-cover py-4 bg-[url('https://i.pinimg.com/originals/13/19/62/1319628426fa9d3783705daf7db525f8.png')]">
                                <h2 className="bg-gray-800 text-white font-semibold p-3 border-0 rounded-full ml-3 max-w-28 text-center">{item.name}</h2>
                            </Link>
                    );
                })}
            </Suspense>
        </div>
    );
};

export default ServerSide;