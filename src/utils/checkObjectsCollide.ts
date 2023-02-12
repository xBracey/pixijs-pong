import { checkLineIntersects } from './checkLineIntersects';

interface GameObject {
    x: number;
    y: number;
    width: number;
    height: number;
}

export const checkObjectsCollide = (obj1: [number, number][], obj2: [number, number][]): boolean => {
    for (let index = 0; index < obj1.length; index++) {
        const point1 = obj1[index];
        const point2 = obj1[(index + 1) % obj1.length];

        for (let index2 = 0; index2 < obj2.length; index2++) {
            const point3 = obj2[index2];
            const point4 = obj2[(index2 + 1) % obj2.length];

            if (
                checkLineIntersects(
                    point1[0],
                    point1[1],
                    point2[0],
                    point2[1],
                    point3[0],
                    point3[1],
                    point4[0],
                    point4[1]
                )
            ) {
                return true;
            }
        }
    }

    return false;
};
