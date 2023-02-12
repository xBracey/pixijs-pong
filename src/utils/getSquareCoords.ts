export const getSquareCoords = (x: number, y: number, width: number, height: number): [number, number][] => {
    return [
        [x + width / 2, y + height / 2],
        [x + width / 2, y - height / 2],
        [x - width / 2, y - height / 2],
        [x - width / 2, y + height / 2]
    ];
};
