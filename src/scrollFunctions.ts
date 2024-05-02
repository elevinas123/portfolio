import { Direction } from "./generatePath";

// Utility function to perform smooth scroll animations with TypeScript typing
const smoothScrollTo = (container: HTMLDivElement, targetX: number, targetY: number, callback: () => void): void => {
    const startX = container.scrollLeft;
    const startY = container.scrollTop;
    const distanceX = targetX - startX;
    const distanceY = targetY - startY;
    const duration = 400; // Duration in milliseconds
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function - easeInOutQuad
        const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
        container.scrollLeft = startX + distanceX * easeInOutQuad(progress);
        container.scrollTop = startY + distanceY * easeInOutQuad(progress);

        if (timeElapsed < duration + 10) {
            requestAnimationFrame(animateScroll);
        } else {
            if (callback) callback(); // Execute callback function once scrolling is complete
        }
    };

    requestAnimationFrame(animateScroll);
};
export const scrollDown = (container: HTMLDivElement, callback: () => void): void => {
    const targetY = container.scrollTop + window.innerHeight;
    smoothScrollTo(container, container.scrollLeft, targetY, callback);
};

export const scrollUp = (container: HTMLDivElement, callback: () => void): void => {
    const targetY = container.scrollTop - window.innerHeight;
    smoothScrollTo(container, container.scrollLeft, targetY, callback);
};

export const scrollRight = (container: HTMLDivElement, callback: () => void): void => {
    const targetX = container.scrollLeft + window.innerWidth;
    smoothScrollTo(container, targetX, container.scrollTop, callback);
};

export const scrollLeft = (container: HTMLDivElement, callback: () => void): void => {
    const targetX = container.scrollLeft - window.innerWidth;
    smoothScrollTo(container, targetX, container.scrollTop, callback);
};

export const scrollToSpecific = (
    container: HTMLDivElement,
    currentPos: number,
    newPos: number,
    directions: Direction[],
    callback: () => void
): void => {
    let currentX = container.scrollLeft;
    let currentY = container.scrollTop;
    if (currentPos === newPos) {
        return
    }
    else if (currentPos < newPos) {
        for (let i = currentPos; i < newPos; i++) {
            switch (directions[i]) {
                case "up":
                    currentY -= window.innerHeight;
                    break;
                case "right":
                    currentX += window.innerWidth;
                    break;
                case "down":
                    currentY += window.innerHeight;
                    break;
                case "left":
                    currentX -= window.innerWidth;
            }
        }
    } else {
        for (let i = newPos; i < currentPos; i++) {
            switch (directions[i]) {
                case "up":
                    currentY += window.innerHeight;
                    break;
                case "right":
                    currentX -= window.innerWidth;
                    break;
                case "down":
                    currentY -= window.innerHeight;
                    break;
                case "left":
                    currentX += window.innerWidth;
            }
        }
    }
    console.log("newX", currentX);
    console.log("newY", currentY);
    console.log("currentX", container.scrollLeft);
    console.log("currentY", container.scrollTop);
    smoothScrollTo(container, currentX, currentY, callback);
};
