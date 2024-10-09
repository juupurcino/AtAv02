import exp from "constants";
import Image from "next/image";

interface IPerso {
    params: {
        id: string;
    }
}

interface IData {
    id: string;
    image: string;
    name: string;
}

const Person = async ({params: {id}} : IPerso) => {
    const res = await fetch(`https://dragonball-api.com/api/characters/${id}`);
    const data : IData = await res.json();
    console.log(data.id)
    
    return (
        <div>
            <h1>{data.id}</h1>
            <p>{data.name}</p>
            <Image className="h-auto w-[500px]" src={data.image} alt="sla" width={100} height={100} />
        </div>

    )
}

export default Person;
