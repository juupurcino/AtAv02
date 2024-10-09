import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface IMenu {
    
    op1: string;
}

export const Menu: React.FC<IMenu> = ({op1}) => {

    const style = {
        nav: "w-auto p-1 w-2/5 text-preto text-lg m-1"
    }

    return(
        
        <div className="font-robFont text-large flex flex-row align-center justify-start text-center bg-zinc-300 border shadow-2xl p-2">
            <Link href={ROUTES.fetchPage} className={style.nav}>{op1}</Link>

        </div>
    
    )
}