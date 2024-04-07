import "@fortawesome/fontawesome-free/css/all.min.css";

interface SectionProps {
    point: [number, number]; // Tuple with two numbers: [gridColumnStart, gridRowStart]
}

export const IntroSection: React.FC<SectionProps> = ({ point }) => {
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
            <button className="mt-5 py-2 px-4 bg-neon-pink hover:bg-pink-300 text-dark font-bold transition-colors duration-200 ease-in-out rounded shadow-lg z-10">
                See My Work
            </button>
        </div>
    );
};

export const AboutSection: React.FC<SectionProps> = ({ point }) => {
    const [gridColumnStart, gridRowStart] = point;
    return (
        <div
            className="flex flex-col items-center justify-center bg-dark text-white snap-center relative w-screen h-screen"
            style={{ gridColumnStart, gridRowStart }}
        >
            <div className="relative group" style={{ transform: "translateY(-50%)" }}>
                <img
                    src="/ElvinasImage.jpg"
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-gray-300 transition duration-300 ease-in-out group-hover:opacity-30"
                    alt="Profile"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-linear">
                    <span className=" font-semibold text-white">Elvinas Monstvilas</span>
                </div>
            </div>
            <div className="text-center mt-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
                <p className="text-lg md:text-xl max-w-prose mx-auto mb-12">
                    I am a passionate software developer specializing in front-end and back-end technologies, dedicated
                    to building innovative and efficient solutions.
                </p>
            </div>
            <div className="absolute bottom-5 left-5 text-gray-400 text-sm md:text-base opacity-50 transition-opacity duration-500 hover:opacity-100">
                Scroll to navigate
            </div>
        </div>
    );
};

export const ServicesSection: React.FC<SectionProps> = ({ point }) => {
    const [gridColumnStart, gridRowStart] = point;
    return (
        <div
            className="flex-none w-screen h-screen flex flex-col items-center justify-center bg-dark text-white snap-center relative"
            style={{
                gridColumnStart, // sets starting column based on passed coordinate
                gridRowStart, // sets starting row based on passed coordinate
            }}
        >
            <div className="text-5xl font-bold mb-4">Services</div>
            <ul className="list-disc text-xl">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Product Management</li>
                <li>Technical Consulting</li>
            </ul>
        </div>
    );
};

export const ProjectsSection: React.FC<SectionProps> = ({ point }) => {
    const [gridColumnStart, gridRowStart] = point;
    return (
        <div
            className="flex-none w-screen h-screen flex flex-col items-center justify-center bg-dark text-white snap-center relative"
            style={{
                gridColumnStart, // sets starting column based on passed coordinate
                gridRowStart, // sets starting row based on passed coordinate
            }}
        >
            <h2 className="neon-effect text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="grid grid-cols-3 gap-4">
                {["Project 1", "Project 2", "Project 3"].map((project) => (
                    <div key={project} className="card">
                        <h3 className="text-3xl">{project}</h3>
                        <p>Insight into the project's achievements and technology stack used.</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export const ContactSection: React.FC<SectionProps> = ({ point }) => {
    const [gridColumnStart, gridRowStart] = point;
    return (
        <div
            className="flex flex-col items-center justify-center bg-dark text-white snap-center relative w-screen h-screen"
            style={{ gridColumnStart, gridRowStart }}
        >
            <h1 className="text-5xl font-bold mb-4">Contact Me</h1>
            <p className="text-xl mb-2">Email: example@example.com</p>
            <p className="text-xl mb-4">Phone: +123 456 7890</p>
            <div className="flex space-x-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
            </div>
        </div>
    );
};
