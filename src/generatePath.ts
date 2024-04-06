export type Grid = number[][]; // Grid type for marking visited cells
export type Direction = "up" | "down" | "left" | "right";
export type Point = [number, number]; // Represents coordinates in the grid

interface PathResult {
    grid: Grid;
    path: Direction[];
    points: Point[]; // Array of points in sequence for placing sections
    dimensions: Point; // Dimensions needed to fit the path
}

export function generatePath(pathLength: number, gridSize: number = 100): PathResult {
    const grid: Grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));
    const directions: Direction[] = ["up", "down", "left", "right"];
    const path: Direction[] = [];
    const points: Point[] = []; // To store each position (x, y) as a part of the path

    let x = Math.floor(gridSize / 2);
    let y = Math.floor(gridSize / 2);
    grid[x][y] = 1; // Start from the center
    points.push([x, y]); // Add the starting point

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
        points.push([x, y]); // Store the new point in the path

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
        points,
        dimensions: [width, height],
    };
}
