"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

import { api } from "@/constants/api";

interface IData {

    id: string
    name: string,
    image: string,
    ki: string,
    race: string,
    gender: string,
    affiliation: string
}

const axiosPage = () => {
    
    const [data, setData] = useState<IData[]>([]);
    const [erro, setErro] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("Não foi possivel buscar os dados!");

    const [page, setpage] = useState<string>("")
    const [name, setname] = useState<string>("")

    useEffect(() => {
        api.get(`/characters?page=${page}&limit=10`).then((res) => {
            setErro(false);
            setData(res.data.items);
        }).catch((error) =>{
            if(error.response.status === 404){
                setErrorMessage("Página não encontrada!");
            }
            setErro(true);
        })

    }, [page])

    return(
        <div>
            <h1>Página com useEffect e Axios</h1>

            <input type="text" value={page} placeholder="Digite a página..." onChange={(e) => setpage(e.target.value)} />
            
            {erro && <h5>{errorMessage}</h5>}
            <div className="flex flex-wrap justify-center items-center">
            
            <Suspense fallback={<div>Loading...</div>}>
                {data.map((item, i) => {
                    return(
                        <div key={i} className="w-64 m-8">
                            <Image className="w-48 h-72 object-contain" src={item.image} width={200} height={200} alt="sla"/>
                            <h2>{item.name}</h2>
                            <h2>{item.race} | {item.gender}</h2>
                            <h2>Base KI: {item.ki}</h2>
                            <h2>Affiliation: {item.affiliation}</h2>
                        </div>
                    )
                })}
            </Suspense>
            </div>
        </div>
    )
}

export default axiosPage;