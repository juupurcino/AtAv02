import exp from "constants";
import Image from "next/image";

interface IPerso {
    params: {
        id: string;
    }
}

interface IData {
    id: string
    name: string,
    image: string,
    ki: string,
    race: string,
    affiliation: string;
    gender: string;
}

const Person = async ({params: {id}} : IPerso) => {
    const res = await fetch(`https://dragonball-api.com/api/characters/${id}`);
    const data : IData = await res.json();
    console.log(data.id)
    
    return (
        <div className="flex flex-col justify-center items-center p-20 bg-[url('https://pbs.twimg.com/media/FaRWha0WIAEOFR8.jpg:large')] bg-no-repeat bg-cover h-screen ">

            <div className="w-80 m-8 rounded-2xl hover:scale-125 transition duration-500 ease-in-out hover:shadow-b">
            <div className="bg-[url('https://img.freepik.com/vetores-gratis/vetor-de-fundo-de-padrao-geometrico-branco-e-cinza_53876-136510.jpg')] object-contain flex justify-center w-full h-auto rounded-t-2xl border shadow-lg shadow-yellow-900/50 p-2">
                <Image className="h-80 w-[300px] object-contain hover:scale-150 transition duration-500 ease-in-out" src={data.image} alt="sla" width={100} height={100} />
            </div>
            <div className="bg-gray-800 rounded-b-2xl p-2">
                <h2 className="font-bold text-white text-2xl m-1">{data.name}</h2>
                <h2 className="font-bold text-yellow-500 m-1">{data.race} | {data.gender}</h2>
                <h2 className="font-bold text-white m-1">Base KI:</h2>
                <h2 className="font-bold text-yellow-500 m-1">{data.ki}</h2>
                <h2 className="font-bold text-white m-1">Affiliation:</h2>
                <h2 className="font-bold text-yellow-500 m-1">{data.affiliation}</h2>
            </div>
            </div>
        </div>

    )
}

export default Person;
