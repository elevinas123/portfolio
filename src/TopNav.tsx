import { GrContact, GrProjects } from "react-icons/gr";
import { IoNavigateCircleOutline } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";

export default function TopNav(props) {
    const icons = [SiAboutdotme, IoNavigateCircleOutline, GrProjects, GrContact];
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
                <Icon
                    key={index}
                    size="2.5rem"
                    className="icon z-10 absolute text-neonpink hover:bg-zinc-600 hover:cursor-pointer hover:text-neonpink p-2 rounded-full"
                    style={{
                        "--tx": `${x}px`,
                        "--ty": `${y}px`,
                        transition: "transform 0.3s ease-out, opacity 0.3s ease-in",
                    }}
                />
            ))}
        </div>
    );
}
