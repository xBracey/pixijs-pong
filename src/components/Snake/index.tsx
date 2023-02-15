import React from 'react';
import { Container, Sprite, useTick } from '@pixi/react';
import { Texture } from '@pixi/core';
import { useKeyDown } from 'src/utils/useKeyDown';
import { Coordinates, Direction } from './types';
import { containerHeight, containerWidth, snakeBoxSize } from '../SnakeGame';

interface ISnake {
    history: Coordinates[];
    addBox: (coords: Coordinates) => void;
    direction: Direction;
    setDirection: (direction: (direction: Direction) => Direction) => void;
}

const Snake = ({ history, addBox, direction, setDirection }: ISnake) => {
    const movementTicker = React.useRef<number>(0);

    useTick((delta) => {
        movementTicker.current += delta;

        if (movementTicker.current > 5) {
            const { x, y } = history[history.length - 1];
            movementTicker.current = 0;

            switch (direction) {
                case 'up':
                    addBox({ x, y: (y + containerHeight - snakeBoxSize) % containerHeight });
                    break;
                case 'down':
                    addBox({ x, y: (y + containerHeight + snakeBoxSize) % containerHeight });
                    break;
                case 'right':
                    addBox({ x: (x + containerWidth + snakeBoxSize) % containerWidth, y });
                    break;
                case 'left':
                    addBox({ x: (x + containerWidth - snakeBoxSize) % containerWidth, y });
                    break;
            }
        }
    });

    useKeyDown([
        { key: 'w', callback: () => setDirection((direction) => (direction === 'down' ? 'down' : 'up')) },
        { key: 's', callback: () => setDirection((direction) => (direction === 'up' ? 'up' : 'down')) },
        { key: 'd', callback: () => setDirection((direction) => (direction === 'left' ? 'left' : 'right')) },
        { key: 'a', callback: () => setDirection((direction) => (direction === 'right' ? 'right' : 'left')) }
    ]);

    return (
        <Container width={containerWidth} height={containerHeight}>
            {history.map((coord) => (
                <Sprite
                    x={coord.x}
                    y={coord.y}
                    anchor={[0.5, 0.5]}
                    width={snakeBoxSize}
                    height={snakeBoxSize}
                    texture={Texture.WHITE}
                    key={`${coord.x}#${coord.y}`}
                />
            ))}
        </Container>
    );
};

export default Snake;
