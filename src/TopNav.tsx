import { GrProjects } from "react-icons/gr";
import { IoNavigateCircleOutline } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";




export default function TopNav(props) {
    

    return (
        <div className="absolute text-white top-0 left-0 box-border   w-24 h-24 rounded-br-lg group hover:w-48 hover:h-48 duration-300 transition-all">
            <div className="bg-zinc-800 w-16 h-16 group-hover:w-32 group-hover:h-32   rounded-br-full duration-300 transition-all: "></div>
            <div className="absolute top-3 left-1">
                <IoNavigateCircleOutline
                    size="2.5rem"
                    className="absolute text-neonpink group-hover:translate-x-36 group-hover:opacity-100 opacity-0 transition-all duration-300 hover:bg-zinc-600 hover:cursor-pointer hover:text-neonpink p-2 rounded-full"
                />
                <SiAboutdotme
                    size="2.5em"
                    className="absolute text-neonpink group-hover:translate-x-24 group-hover:translate-y-24  transition-all duration-300 hover:bg-zinc-600 hover:cursor-pointer hover:text-neonpink p-2 rounded-full"
                />
                <GrProjects
                    size="2.5rem"
                    className="absolute text-neonpink opacity-0 group-hover:translate-y-36 group-hover:opacity-100 transition-all duration-300 hover:bg-zinc-600 hover:cursor-pointer hover:text-neonpink p-2 rounded-full"
                />
            </div>
        </div>
    );
}