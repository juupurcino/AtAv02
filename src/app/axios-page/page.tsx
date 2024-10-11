"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

import { api } from "@/constants/api";
import { Card } from "@/components/card";

import logo from "@/assets/logo.png";

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

    useEffect(() => {
        api.get(`/characters?page=${page}&limit=10`).then((res) => {
            setErro(false);
            setData(res.data.items);
        }).catch((error) =>{
            if(error){
                setErrorMessage("Página não encontrada!");
            }
            setErro(true);
        })

    }, [page])

    return(
        <div className="flex flex-wrap justify-center items-center">
            <div className="bg-[url('https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/26079ab060401d8a76039e985d63a3e9.jpg')] w-full h-96 flex justify-center items-center flex-col">
                <Image className="w-64 h-36 object-contain" src={logo} width={200} height={200} alt="sla"/>
                <input className="w-80 h-12 p-4 border rounded-3xl outline-yellow-500 " type="text" value={page} placeholder="Digite a página..." onChange={(e) => setpage(e.target.value)} />

            </div>

            
            {erro && <h5>{errorMessage}</h5>}

            <div className="flex flex-wrap justify-center items-center">

            <Suspense fallback={<div>Loading...</div>}>
                {data.map((item, i) => {
                    return(
                        <div key={i} className="w-64 m-8 rounded-2xl">
                            <Card imagem={item.image} nome={item.name} genero={item.gender} raca={item.race} ki={item.ki} afiliacao={item.affiliation}></Card>
                        </div>
                    )
                })}

            </Suspense>
            </div>
        </div>
    )
}

export default axiosPage;