import { useTick } from '@pixi/react';
import { findMiddle } from './findMiddle';

const aiSpeed = 4;

export const useAI = (
    y: number,
    setY: (y: (y: number) => number) => void,
    minY: number,
    maxY: number,
    boardHeight: number,
    ballY: number
) => {
    useTick(() => {
        const willMove = Math.random() > 0.15;

        if (willMove) {
            if (ballY < y) {
                setY((y) => findMiddle(minY + boardHeight / 2, maxY - boardHeight / 2, y) - aiSpeed);
            } else if (ballY > y) {
                setY((y) => findMiddle(minY + boardHeight / 2, maxY - boardHeight / 2, y) + aiSpeed);
            }
        }
    });
};
