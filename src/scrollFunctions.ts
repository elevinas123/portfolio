export const scrollDown = (container: HTMLDivElement, callback: () => void) => {
    const newY = container.scrollTop + window.innerHeight;
    container.scrollTo({ top: newY, behavior: "smooth" });
    // Assuming 500 ms is your scroll animation duration
    setTimeout(callback, 500);
};

export const scrollUp = (container: HTMLDivElement, callback: () => void) => {
    const newY = container.scrollTop - window.innerHeight;
    container.scrollTo({ top: newY, behavior: "smooth" });
    setTimeout(callback, 500);
};

export const scrollRight = (container: HTMLDivElement, callback: () => void) => {
    const newX = container.scrollLeft + window.innerWidth;
    container.scrollTo({ left: newX, behavior: "smooth" });
    setTimeout(callback, 700);
};

export const scrollLeft = (container: HTMLDivElement, callback: () => void) => {
    const newX = container.scrollLeft - window.innerWidth;
    container.scrollTo({ left: newX, behavior: "smooth" });
    setTimeout(callback, 700);
};
