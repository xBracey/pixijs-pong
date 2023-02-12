export const findMiddle = (min: number, max: number, value: number) => {
    const sortedNumbers = [min, max, value].sort((a, b) => a - b);
    return sortedNumbers[1];
};
