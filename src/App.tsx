import React, { useEffect, useRef, useState } from "react";
import { scrollDown, scrollLeft, scrollRight, scrollUp } from "./scrollFunctions";
import { AboutSection, ContactSection, IntroSection, ProjectsSection, ServicesSection } from "./Content";
import { generatePath } from "./generatePath";

type Direction = "right" | "down" | "left" | "up";

const App: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef<number>(0);
    const isScrollingRef = useRef<boolean>(false); // Ref to track if scrolling is in progress
    const movement = useRef<Direction[]>([]);
    const [content, setContent] = useState<any>([]);
    const forwardMapping = {
        right: scrollRight,
        left: scrollLeft,
        up: scrollUp,
        down: scrollDown,
    };
    const backwardMapping = {
        right: scrollLeft,
        left: scrollRight,
        up: scrollDown,
        down: scrollUp,
    };
    type Point = [number, number];

    function normalizePoints(points: Point[]): Point[] {
        // Find the minimum x and y coordinates to normalize positions
        let minX = points[0][0];
        let minY = points[0][1];

        for (const [x, y] of points) {
            if (x < minX) minX = x;
            if (y < minY) minY = y;
        }

        // Translate all points to start from (0,0)
        const normalizedPoints = points.map(([x, y]) => [x - minX + 1, y - minY + 1] as Point);

        return normalizedPoints;
    }

    const scroll = (direction: Direction) => {
        if (direction) {
            scrollSomeWhere(containerRef.current, direction, true);
        }
    };

    useEffect(() => {
        // Define the array of section components you might render
        const sectionsComponents = [IntroSection, AboutSection, ServicesSection, ProjectsSection, ContactSection];

        // Generate path data
        const { points, path } = generatePath(4); // Assuming generatePath returns only points and path now
        const normalizedPoints = normalizePoints(points); // Assuming these are correct dimensions

        movement.current = path;
        // Create section elements with corresponding grid positions
        const sections = normalizedPoints.map((point, index) => {
            const SectionComponent = sectionsComponents[index % sectionsComponents.length]; // Repeat components if there are more points than components
            return <SectionComponent key={index} point={point} direction={movement.current[index]} scroll={scroll} />;
        });
        console.log("movement", movement);
        console.log("points1", normalizedPoints);

        setContent(sections);
    }, []);
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        if (content.length === 0) return;
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const vw = window.innerWidth || document.documentElement.clientWidth;
        console.log("content", window.innerWidth);
        console.log("content", document.documentElement.clientWidth);
        console.log("content", content);
        console.log("vh", vh);
        console.log("vw", vw);
        container.scrollTo({
            top: (content[0].props.point[1] - 1) * vh, // Optional: Adjust to center the element in the view
            left: (content[0].props.point[0] - 1) * vw, // Optional: Adjust to center the element in the view
        });
        console.log("container.scrollTop", container.scrollTop);
        console.log("container.scrollLeft", container.scrollLeft);
    }, [content]);

    const scrollSomeWhere = (container: HTMLDivElement | null, direction: Direction, forward: boolean) => {
        if (container && !isScrollingRef.current && direction) {
            isScrollingRef.current = true; // Set scrolling flag
            console.log("position", positionRef.current);
            console.log("movement", movement);

            const scrollFunction = forward ? forwardMapping[direction] : backwardMapping[direction];
            console.log("scrollFunction", scrollFunction);
            console.log("directionKey", direction);
            scrollFunction(container, () => {
                isScrollingRef.current = false; // Reset scrolling flag when done
                // Update positionRef based on the scroll direction
                positionRef.current = forward
                    ? Math.min(positionRef.current + 1, movement.current.length - 1)
                    : Math.max(positionRef.current - 1, 0);
            });
        }
    };

    useEffect(() => {
        const scrollContainer = containerRef.current;

        const handleWheel = (event: WheelEvent) => {
            event.preventDefault(); // Prevent the default scroll behavior
            const isScrollingDown = event.deltaY > 0;
            const directionKey = movement.current[positionRef.current % movement.current.length];
            scrollSomeWhere(scrollContainer, directionKey, isScrollingDown);
        };

        scrollContainer?.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            scrollContainer?.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <div ref={containerRef} className=" grid-container overflow-hidden w-screen h-screen">
            {content}
        </div>
    );
};

export default App;
