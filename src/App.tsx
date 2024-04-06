import React, { useEffect, useRef } from "react";
import { scrollDown, scrollLeft, scrollRight, scrollUp } from "./scrollFunctions";
import { AboutSection, ContactSection, IntroSection, ProjectsSection, ServicesSection } from "./Content";

const App: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef<number>(0);
    const isScrollingRef = useRef<boolean>(false); // Ref to track if scrolling is in progress
    const movement: ("right" | "down" | "left" | "up")[] = ["down", "down", "down", "down"];
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

    useEffect(() => {
        console.log(generatePath(20));
    }, []);

    useEffect(() => {
        const scrollContainer = containerRef.current;

        const handleWheel = (event: WheelEvent) => {
            event.preventDefault(); // Prevent the default scroll behavior
            if (scrollContainer && !isScrollingRef.current) {
                isScrollingRef.current = true; // Set scrolling flag
                console.log("position", positionRef.current);

                const isScrollingDown = event.deltaY > 0;
                const directionKey = movement[positionRef.current % movement.length];
                const scrollFunction = isScrollingDown ? forwardMapping[directionKey] : backwardMapping[directionKey];

                scrollFunction(scrollContainer, () => {
                    isScrollingRef.current = false; // Reset scrolling flag when done
                    // Update positionRef based on the scroll direction
                    positionRef.current = isScrollingDown
                        ? Math.min(positionRef.current + 1, movement.length - 1)
                        : Math.max(positionRef.current - 1, 0);
                });
            }
        };

        scrollContainer?.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            scrollContainer?.removeEventListener("wheel", handleWheel);
        };
    }, []);
    type Grid = number[][]; // Grid type for marking visited cells
    type Direction = "up" | "down" | "left" | "right";
    type Point = [number, number]; // Represents coordinates in the grid

    interface PathResult {
        grid: Grid;
        path: Direction[];
        dimensions: Point; // Dimensions needed to fit the path
    }

    function generatePath(pathLength: number, gridSize: number = 100): PathResult {
        const grid: Grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));
        const directions: Direction[] = ["up", "down", "left", "right"];
        const path: Direction[] = [];
        let x = Math.floor(gridSize / 2);
        let y = Math.floor(gridSize / 2);
        grid[x][y] = 1; // Start from the center

        let minX = x,
            maxX = x,
            minY = y,
            maxY = y; // Track extents

        for (let i = 0; i < pathLength; i++) {
            const validDirections = directions.filter((dir) => {
                switch (dir) {
                    case "up":
                        return y > 0 && grid[x][y - 1] === 0;
                    case "down":
                        return y < gridSize - 1 && grid[x][y + 1] === 0;
                    case "left":
                        return x > 0 && grid[x - 1][y] === 0;
                    case "right":
                        return x < gridSize - 1 && grid[x + 1][y] === 0;
                    default:
                        return false;
                }
            });

            if (validDirections.length === 0) break; // No valid move, end early

            const direction = validDirections[Math.floor(Math.random() * validDirections.length)];
            path.push(direction);

            switch (direction) {
                case "up":
                    y--;
                    break;
                case "down":
                    y++;
                    break;
                case "left":
                    x--;
                    break;
                case "right":
                    x++;
                    break;
            }

            grid[x][y] = 1; // Mark the new cell as visited
            // Update the extents
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
        }

        // Calculate dimensions needed to cover the path
        const width = maxX - minX + 1;
        const height = maxY - minY + 1;

        return {
            grid,
            path,
            dimensions: [width, height],
        };
    }

    return (
        <div ref={containerRef} className="flex flex-row overflow-hidden w-screen h-screen snap-x snap-mandatory">
            <div className="flex flex-col">
                <IntroSection />
                <AboutSection />
                <ServicesSection />
                <ProjectsSection />
                <ContactSection />
            </div>
        </div>
    );
};

export default App;
