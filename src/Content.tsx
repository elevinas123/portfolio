import "@fortawesome/fontawesome-free/css/all.min.css";

interface SectionProps {
    point: [number, number]; // Tuple with two numbers: [gridColumnStart, gridRowStart]
    scroll: any;
    direction: Direction;
}

export const IntroSection: React.FC<SectionProps> = ({ point, scroll, direction }) => {
    useEffect(() => {
        console.log("direction", direction);
    }, []);
    const [gridColumnStart, gridRowStart] = point;
    return (
        <div
            className="flex-none w-screen h-screen flex flex-col items-center justify-center bg-dark text-white snap-center relative"
            style={{ gridColumnStart, gridRowStart }}
        >
            <div className="circle-bg absolute top-1/2 -right-10 transform -translate-x-1/2 w-96 h-96 rounded-full filter blur-xl opacity-50"></div>
            <img
                src="/vecteezy_modern-flat-city-building-silhouette-illustration_7920869 (1).svg"
                className="absolute bottom-0 right-35 w-1/2 h-96  hue-rotate-90 opacity-65"
                alt="Floral Right Border"
            />
            <h1 className="text-5xl font-bold mb-4 z-10 ">Welcome to My Portfolio</h1>
            <p className="text-xl z-10">Explore my projects and learn more about my skills.</p>
            <button
                onClick={() => {
                    scroll(direction);
                    console.log("hi");
                }}
                className="mt-5 py-2 px-4 bg-neon-pink hover:bg-pink-300 text-dark font-bold transition-colors duration-200 ease-in-out rounded shadow-lg z-10"
            >
                About me
            </button>
        </div>
    );
};

import { FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa"; // Importing icons from react-icons
import { Direction } from "./generatePath";
import { useEffect } from "react";
import TypingGame from "./typingFolder/TypingGame";

export const AboutSection: React.FC<SectionProps> = ({ point }) => {
    const [gridColumnStart, gridRowStart] = point;

    return (
        <div
            className="flex flex-col items-center justify-center bg-dark text-white snap-center relative w-screen h-screen overflow-hidden"
            style={{ gridColumnStart, gridRowStart }}
        >
            <div className="flex flex-col items-center justify-center w-full h-full p-10">
                <div className="relative mb-10">
                    <img
                        rel="preload"
                        decoding="async"
                        src="/ElvinasImage.webp" // Use the image only when it's loaded
                        className=" image-class w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-gray-700 shadow-xl transition-all duration-300 ease-in-out hover:opacity-75"
                        alt="Profile"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                        <span className="text-xl md:text-2xl font-semibold">Elvinas Monstvilas</span>
                    </div>
                </div>
                <h1 className="text-5xl font-bold mb-4">About Me</h1>
                <p className="text-lg md:text-xl text-center max-w-prose mx-auto mb-6">
                    Currently a student at Vilnius Lyceum, I am a passionate software developer skilled in full-stack
                    web development. My focus is on JavaScript, React, and Node.js, which I use to build efficient
                    solutions that enhance user experiences.
                </p>
                <div className="flex gap-4 justify-center mb-6">
                    <FaJsSquare className="text-4xl text-yellow-500" />
                    <FaReact className="text-4xl text-sky-500" />
                    <FaNodeJs className="text-4xl text-green-500" />
                </div>
                <p className="text-lg md:text-xl text-center max-w-prose mx-auto mb-4">
                    Dedicated to innovation, I have been recognized with awards and have contributed to impactful
                    projects. Outside of my studies, my passion extends to AI research and competitive programming.
                </p>
                <div className="absolute bottom-10 left-10 text-gray-400 text-sm md:text-lg opacity-50 transition-opacity duration-500 hover:opacity-100">
                    Scroll to navigate
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
};export const ProjectsSection: React.FC<SectionProps> = ({ point }) => {
    const [gridColumnStart, gridRowStart] = point;

    return (
        <div
            className="flex-none w-screen h-screen flex flex-col items-center justify-center bg-dark text-white snap-center relative overflow-hidden"
            style={{ gridColumnStart, gridRowStart }}
        >
            <TypingGame />
            <p className="mt-4 text-xl max-w-2xl text-center">
                Enhance your typing skills with a fun and interactive challenge. Test your accuracy and speed, and see
                how you improve over time.
            </p>
        </div>
    );
};

export const ContactSection: React.FC<SectionProps> = ({ point }) => {
    const [gridColumnStart, gridRowStart] = point;
    return (
        <div
            className="flex flex-col flex-none items-center justify-center bg-dark text-white snap-center min-h-screen w-full px-6 py-10"
            style={{ gridColumnStart, gridRowStart }}
        >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
            <p className="text-lg md:text-xl max-w-prose text-center mb-5">
                Have questions or want to work together? Feel free to reach out!
            </p>
            <div className="mb-5">
                <a
                    href="mailto:Elvinas.monstvilas@gmail.com"
                    className="text-base md:text-lg text-pink-500 hover:text-pink-600 transition-colors"
                >
                    elvinas.monstvilas@gmail.com
                </a>
            </div>
            <div className="flex space-x-3">
                <a
                    href="https://github.com/elevinas123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700 transition-colors"
                >
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/elvinas-monstvilas-47ab81262/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700 transition-colors"
                >
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a
                    href="https://instagram.com/elevinas123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700 transition-colors"
                >
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
            </div>
        </div>
    );
};
