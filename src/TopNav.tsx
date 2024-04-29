import { FaBriefcase, FaHome, FaTools } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { IoGameController } from "react-icons/io5";
import { scrollToSpecific } from "./scrollFunctions";
import { Direction } from "./generatePath";
import { useAtom } from "jotai";
import { posAtom } from "./atoms";
import { useEffect, useRef } from "react";

type TopNavProps = {
    container: HTMLDivElement | null;
    movementDirections: Direction[] | null;
    position: number | null;
};

export default function TopNav(props: TopNavProps) {
    const icons = [FaHome, FaCircleInfo, FaTools, IoGameController, FaBriefcase, GrContact];
    const [currentPos, setCurrentPos] = useAtom(posAtom);
    const currentPosRef = useRef<number>(currentPos)
    useEffect(() => {
        currentPosRef.current = currentPos
    }, [currentPos])
    const radius = 36 * 4; // Adjust the radius as needed
    // Calculate positions dynamically based on the number of icons
    const positions = icons.map((Icon, index) => {
        const totalIcons = icons.length;
        const angle = (90 / (totalIcons - 1)) * index; // Spread from 0 to 90 degrees
        const radians = (angle * Math.PI) / 180;
        const x = Math.cos(radians) * radius;
        const y = Math.sin(radians) * radius;
        return { x, y, Icon };
    });

    return (
        <div className="absolute text-white top-0 left-0 box-border w-24 h-24 rounded-br-lg group hover:w-48 hover:h-48 duration-300 transition-all">
            <div className="bg-zinc-800 absolute w-16 h-16 group-hover:w-32 group-hover:h-32 rounded-br-full duration-300 transition-all"></div>
            {positions.map(({ x, y, Icon }, index) => (
                <button>
                    <Icon
                        key={index}
                        onClick={() => {
                            console.log(props.container, props.movementDirections, currentPosRef.current);
                            props.container &&
                                props.movementDirections &&
                                currentPosRef.current != null &&
                                scrollToSpecific(
                                    props.container,
                                    currentPosRef.current,
                                    index,
                                    props.movementDirections,
                                    () => {
                                        setCurrentPos(index);
                                        console.log("currentPos", currentPosRef.current);
                                        console.log("index", index);
                                    }
                                );
                        }}
                        size="2.5rem"
                        className="icon z-10 overflow-visible  absolute text-neonpink  hover:bg-zinc-600 hover:cursor-pointer hover:text-neonpink p-2 rounded-full"
                        style={{
                            "--tx": `${x}px`,
                            "--ty": `${y}px`,
                            transition: "transform 0.3s ease-out, opacity 0.3s ease-in",
                        }}
                    />
                </button>
            ))}
        </div>
    );
}
