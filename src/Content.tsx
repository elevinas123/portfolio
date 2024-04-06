

export const IntroSection: React.FC = () => {
    return (
        <div className="flex-none w-screen h-screen flex flex-col items-center justify-center bg-dark text-white snap-center relative">
            <div className="circle-bg absolute top-1/2 -right-10 transform -translate-x-1/2 w-96 h-96 rounded-full filter blur-xl opacity-50"></div>
            <h1 className="text-5xl font-bold mb-4 z-10">Welcome to My Portfolio</h1>
            <p className="text-xl z-10">Explore my projects and learn more about my skills.</p>
            <button className="mt-5 py-2 px-4 bg-neon-pink hover:bg-pink-300 text-dark font-bold transition-colors duration-200 ease-in-out rounded shadow-lg z-10">
                See My Work
            </button>
        </div>
    );
};

export const AboutSection: React.FC = () => {
    return (
        <div className="flex-none w-screen h-screen flex flex-col items-center justify-center bg-dark text-white snap-center relative">
            <div className="text-5xl font-bold mb-4">About Me</div>
            <p className="text-xl max-w-prose">
                I am a passionate software developer specializing in front-end and back-end technologies.
            </p>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-neon-pink rounded-full"></div>
        </div>
    );
};

export const ServicesSection: React.FC = () => {
    return (
        <div className="flex-none w-screen h-screen flex flex-col items-center justify-center bg-dark text-white snap-center">
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

export const ProjectsSection: React.FC = () => {
    return (
        <div className="body-bg flex flex-col flex-none items-center justify-center w-screen h-screen snap-center">
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
export const ContactSection: React.FC = () => {
    return (
        <div className="flex-none w-screen h-screen flex flex-col items-center justify-center bg-dark text-white snap-center">
            <div className="text-5xl font-bold mb-4">Contact Me</div>
            <p className="text-xl">Email: example@example.com</p>
            <p className="text-xl">Phone: +123 456 7890</p>
        </div>
    );
};
