import { useEffect } from "react";
import { Direction } from "./generatePath";
import TypingGame from "./typingFolder/TypingGame";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaArrowDown } from "react-icons/fa";
import TopNav from "./TopNav";

interface SectionProps {
    point: [number, number]; // Tuple with two numbers: [gridColumnStart, gridRowStart]
    scroll: any;
    direction: Direction;
}

export const IntroSection: React.FC<SectionProps> = ({ point, scroll, direction }) => {
    useEffect(() => {
        console.log("direction", direction);
    }, [direction]);
    const [gridColumnStart, gridRowStart] = point;
    return (
        <div
            className="flex-none w-screen h-screen flex flex-col items-center justify-center bg-dark text-white snap-center relative"
            style={{ gridColumnStart, gridRowStart }}
        >
            <TopNav />
            <h1 className="text-5xl font-bold mb-4 z-10 text-center px-2 ">Welcome to My Portfolio</h1>
            <p className="text-xl z-10 text-center px-4">Explore my projects and learn more about my skills.</p>
            <button
                onClick={() => {
                    scroll(direction);
                }}
                className="mt-5 py-2 px-4 bg-neon-pink hover:bg-pink-300 text-dark font-bold transition-colors duration-200 ease-in-out rounded shadow-lg z-10"
            >
                About me
            </button>
            <img
                src="/vecteezy_modern-flat-city-building-silhouette-illustration_7920869 (1).svg"
                className="absolute bottom-0 w-full md:w-1/2 md:h-96 hue-rotate-90 opacity-65"
                alt="Floral Right Border"
            />
        </div>
    );
};

export const AboutSection: React.FC<SectionProps> = ({ point }) => {
    const [gridColumnStart, gridRowStart] = point;

    return (
        <div
            className="flex flex-col items-center justify-center bg-dark text-white snap-center relative w-screen h-screen overflow-hidden"
            style={{ gridColumnStart, gridRowStart }}
        >
            <TopNav />
            <div className="flex flex-col items-center justify-between  w-full h-full px-10">
                <div className="flex flex-col  justify-center items-center h-90vh">
                    <div className="relative mb-10 group">
                        <img
                            rel="preload"
                            decoding="async"
                            src="/ElvinasImage.webp"
                            className="w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-gray-700 shadow-xl transition-all duration-300 ease-in-out group-hover:opacity-30"
                            alt="Profile"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <span className="text-xl md:text-2xl font-semibold">Elvinas Monstvilas</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
                    <p className="text-md  text-center max-w-prose mx-auto mb-6 md:text-xl">
                        I am Elvinas Monstvilas, a dedicated student with a deep passion for coding and a commitment to
                        lifelong learning. My academic journey at Vilnius Lyceum is intertwined with exploring
                        innovative solutions and advancing my technical skills.
                    </p>
                    <p className="text-md md:text-xl text-center max-w-prose mx-auto">
                        Driven by curiosity, I immerse myself in technology to not only build my capabilities but also
                        to contribute meaningfully to the broader tech community.
                    </p>
                </div>
                <div className=" text-neonpink text-sm md:text-lg opacity-50 transition-opacity duration-500 hover:opacity-100 animate-scroll my-4 ">
                    <div>Scroll to navigate</div>
                    <div className="justify-center items-center flex flex-row">
                        <FaArrowDown />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ServicesSection: React.FC<SectionProps> = ({ point, scroll, direction }) => {
    const [gridColumnStart, gridRowStart] = point;
    return (
        <div
            className="flex-none w-screen h-screen flex flex-col items-center justify-center bg-dark text-white snap-center relative"
            style={{ gridColumnStart, gridRowStart }}
        >
            <TopNav />
            <h2 className="text-4xl font-bold mb-10">Services</h2>
            <div className="flex flex-wrap justify-center gap-10">
                <div className="text-center max-w-xs">
                    <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
                    <p className="text-sm">
                        Specializing in building sleek, high-performance websites using modern technologies like HTML,
                        CSS, ReactJS, and Node.js.
                    </p>
                </div>
                <div className="text-center max-w-xs">
                    <h3 className="text-2xl font-semibold mb-2">Back-end Development</h3>
                    <p className="text-sm">
                        Developing secure and scalable server solutions with Python, C++, and MongoDB.
                    </p>
                </div>
                <div className="text-center max-w-xs">
                    <h3 className="text-2xl font-semibold mb-2">UI/UX Design</h3>
                    <p className="text-sm">
                        Crafting intuitive and aesthetically pleasing user interfaces that enhance user experience.
                    </p>
                </div>
            </div>
            <button
                onClick={() => scroll(direction)}
                className="mt-5 py-2 px-4 bg-neon-pink hover:bg-pink-300 text-dark font-bold transition-colors duration-200 ease-in-out rounded shadow-lg z-10"
            >
                See My Work
            </button>
        </div>
    );
};

export const GameSection: React.FC<SectionProps> = ({ point }) => {
    const [gridColumnStart, gridRowStart] = point;

    return (
        <div
            className="flex-none w-screen h-screen flex flex-col items-center justify-center bg-dark text-white snap-center relative overflow-hidden"
            style={{ gridColumnStart, gridRowStart }}
        >
            <TopNav />
            <TypingGame />
            <p className="text-xl mt-4 max-w-2xl text-center">
                Sharpen your typing skills with "BetterType," a dynamic challenge to test your speed and accuracy.
                <a
                    href="https://better-typer-vite.vercel.app/"
                    target="_blank"
                    className="ml-1 text-neonpink hover:text-pink-300"
                >
                    Explore the full version.
                </a>
            </p>
        </div>
    );
};

export const ProjectsSection: React.FC<SectionProps> = ({ point }) => {
    const [gridColumnStart, gridRowStart] = point;

    return (
        <div
            className="w-screen h-screen flex flex-col items-center justify-center bg-dark text-white snap-center relative"
            style={{ gridColumnStart, gridRowStart }}
        >
            <TopNav />
            <h2 className="md:text-4xl text-2xl  font-bold mb-5">Projects Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 ">
                <ProjectTile
                    title="BetterType Game"
                    description="Refine your coding skills with a typing tester designed to improve speed and accuracy."
                    liveUrl="https://better-typer-vite.vercel.app"
                    githubUrl="https://github.com/elevinas123/better-typer-vite"
                />
                <ProjectTile
                    title="To Do App"
                    description="Streamline your daily tasks with an elegantly designed To Do app"
                    liveUrl="https://to-do-next-gamma.vercel.app/"
                    githubUrl="https://github.com/elevinas123/to-do-next"
                />
                <ProjectTile
                    title="Local CMS"
                    description="Rethink data management with a concept CMS that integrates seamlessly with your GitHub repository to store and retrieve content."
                    liveUrl="https://localcms.vercel.app/"
                    githubUrl="https://github.com/elevinas123/localcms"
                />
            </div>
            <div className="mt-4">
                Discover more on
                <a
                    target="_blank"
                    href="https://github.com/elevinas123"
                    className="text-neonpink hover:text-pink-300 cursor-pointer ml-1"
                >
                    GitHub
                </a>
                .
            </div>
        </div>
    );
};

const ProjectTile: React.FC<{ title: string; description: string; liveUrl: string; githubUrl: string }> = ({
    title,
    description,
    liveUrl,
    githubUrl,
}) => {
    return (
        <div className="relative overflow-hidden bg-dark-light rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="p-5 border border-neonpink">
                <h3 className="md:text-2xl text-lg font-semibold mb-2 text-neonpink">{title}</h3>
                <p className="text-sm mb-4 h-12   hidden md:block">{description}</p>
                <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neonpink text-xs md:text-md hover:text-pink-300 transition-colors duration-300 ease-in-out"
                >
                    Visit Site
                </a>
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 text-neonpink text-xs md:text-md hover:text-pink-300 transition-colors duration-300 ease-in-out"
                >
                    View on GitHub
                </a>
            </div>
        </div>
    );
};

export const ContactSection: React.FC<SectionProps> = ({ point }) => {
    const [gridColumnStart, gridRowStart] = point;
    return (
        <div
            className="flex-none w-screen h-screen flex flex-col items-center justify-center bg-dark text-white snap-center relative overflow-hidden"
            style={{ gridColumnStart, gridRowStart }}
        >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
            <p className="text-lg md:text-xl max-w-prose text-center mb-5 px-2 md:px-0">
                Have questions or want to work together? Feel free to reach out!
            </p>
            <div className="mb-5">
                <a
                    href="mailto:Elvinas.monstvilas@gmail.com"
                    className="text-base md:text-lg text-pink-500 hover:text-pink-300 transition-colors"
                >
                    elvinas.monstvilas@gmail.com
                </a>
            </div>
            <div className="mb-5">
                <a
                    href="tel:+37068249159"
                    className="text-base md:text-lg text-pink-500 hover:text-pink-300 transition-colors"
                >
                    +370 682 49159
                </a>
            </div>
            <div className="flex space-x-3">
                <a
                    href="https://github.com/elevinas123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-300 transition-colors"
                >
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/elvinas-monstvilas-47ab81262/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-300 transition-colors"
                >
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a
                    href="https://instagram.com/elevinas123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-300 transition-colors"
                >
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
            </div>
        </div>
    );
};
