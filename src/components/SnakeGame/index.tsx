import React, { useState } from 'react';
import { Coordinates, Direction } from '../Snake/types';
import Snake from '../Snake';
import { Container, Sprite, useTick } from '@pixi/react';
import { Texture } from '@pixi/core';

export const snakeBoxSize = 20;
export const containerWidth = 800;
export const containerHeight = 600;

interface ISnakeGame {
    triggerGameOver: () => void;
}

const generateRandomCoords = (history: Coordinates[]): Coordinates => {
    const x = Math.floor(Math.random() * 36) * snakeBoxSize + snakeBoxSize * 2;
    const y = Math.floor(Math.random() * 26) * snakeBoxSize + snakeBoxSize * 2;

    if (history.find((coord) => coord.x === x && coord.y === y)) {
        return generateRandomCoords(history);
    }

    return { x, y };
};

const SnakeGame = ({ triggerGameOver }: ISnakeGame) => {
    const [history, setHistory] = useState<Coordinates[]>([
        { x: 380, y: 400 },
        { x: 400, y: 400 },
        { x: 420, y: 400 }
    ]);
    const [direction, setDirection] = useState<Direction>('right');
    const [food, setFood] = useState<Coordinates>(generateRandomCoords(history));
    const addBox = (coords: Coordinates) => {
        setHistory((history) => [...history.slice(1), coords]);
    };

    const addExtraBox = (coords: Coordinates) => {
        setHistory((history) => [...history, coords]);
    };

    useTick(() => {
        if (
            history.some((coord, index) =>
                history.slice(index + 1).some((otherCoord) => coord.x === otherCoord.x && coord.y === otherCoord.y)
            )
        ) {
            triggerGameOver();
            setHistory([]);
        }

        if (history.length && history[history.length - 1].x === food.x && history[history.length - 1].y === food.y) {
            setFood(generateRandomCoords(history));
            const { x, y } = history[history.length - 1];

            switch (direction) {
                case 'up':
                    addExtraBox({ x, y: (y + containerHeight - snakeBoxSize) % containerHeight });
                    break;
                case 'down':
                    addExtraBox({ x, y: (y + containerHeight + snakeBoxSize) % containerHeight });
                    break;
                case 'right':
                    addExtraBox({ x: (x + containerWidth + snakeBoxSize) % containerWidth, y });
                    break;
                case 'left':
                    addExtraBox({ x: (x + containerWidth - snakeBoxSize) % containerWidth, y });
                    break;
            }
        }
    });

    return (
        <Container width={800} height={600}>
            {!!history.length && (
                <Snake history={history} addBox={addBox} direction={direction} setDirection={setDirection} />
            )}
            <Sprite
                x={food.x}
                y={food.y}
                anchor={[0.5, 0.5]}
                width={snakeBoxSize}
                height={snakeBoxSize}
                texture={Texture.WHITE}
            />
        </Container>
    );
};

export default SnakeGame;
