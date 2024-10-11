import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface IMenu {
    
    op1: string;
    op2: string;
    op3: string;
}

export const Menu: React.FC<IMenu> = ({op1, op2, op3}) => {

    const style = {
        nav: "w-auto p-1 w-2/5 text-preto text-base m-1 bg-yellow-500 p-2 border-0 rounded-lg font-bold text-gray-800 hover:bg-yellow-600"
    }

    return(
        
        <div className="font-robFont text-large flex flex-row align-center justify-end text-center bg-zinc-200 border shadow-2xl p-2">
            <Link href={ROUTES.fetchPage} className={style.nav}>{op1}</Link>
            <Link href={ROUTES.axiosPage} className={style.nav}>{op2}</Link>
            <Link href={ROUTES.serverPage} className={style.nav}>{op3}</Link>

        </div>
    
    )
}