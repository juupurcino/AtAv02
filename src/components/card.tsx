import Image from "next/image";

export const Card = ({imagem, nome, genero, raca, ki, afiliacao} : {

    imagem: string;
    nome: string;
    genero: string;
    raca : string;
    ki : string;
    afiliacao: string;
}) => {

    return (
        <>
    
        <div className="w-64 m-8 rounded-2xl">
            <div className="bg-[url('https://img.freepik.com/vetores-gratis/vetor-de-fundo-de-padrao-geometrico-branco-e-cinza_53876-136510.jpg')] object-contain flex justify-center w-full h-auto rounded-t-2xl border shadow-lg shadow-yellow-900/50">
            <Image className="w-48 h-72 object-contain hover:scale-125 transition duration-500 ease-in-out" src={imagem} width={200} height={200} alt="sla"/>
            </div>
            <div className="bg-gray-800 rounded-b-2xl p-2">
                <h2 className="font-bold text-white text-2xl m-1">{nome}</h2>
                <h2 className="font-bold text-yellow-500 m-1">{raca} | {genero}</h2>
                <h2 className="font-bold text-white m-1">Base KI:</h2>
                <h2 className="font-bold text-yellow-500 m-1">{ki}</h2>
                <h2 className="font-bold text-white m-1">Affiliation:</h2>
                <h2 className="font-bold text-yellow-500 m-1">{afiliacao}</h2>
            </div>
        </div>

        </>
      );
}   