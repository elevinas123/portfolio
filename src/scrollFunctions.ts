// Utility function to perform smooth scroll animations with TypeScript typing
const smoothScrollTo = (container: HTMLDivElement, targetX: number, targetY: number, callback: () => void): void => {
    const startX = container.scrollLeft;
    const startY = container.scrollTop;
    const distanceX = targetX - startX;
    const distanceY = targetY - startY;
    const duration = 300; // Duration in milliseconds
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

export const scrollAnywhere = () => {
    
}
