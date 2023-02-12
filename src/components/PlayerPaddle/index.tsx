import React from 'react';
import { useKeyboardMovement } from 'src/utils/useKeyboardMovement';
import Paddle from '../Paddle';
import { findMiddle } from 'src/utils/findMiddle';
import { IPlayerPaddle } from './types';

const boardWidth = 16;
const boardHeight = 128;

const PlayerPaddle = ({ x, y, setY, minY, maxY }: IPlayerPaddle) => {
    useKeyboardMovement([
        {
            key: 'w',
            callback: (speed: number) => {
                setY((y) => findMiddle(minY + boardHeight / 2, maxY - boardHeight / 2, y) - speed);
            }
        },
        {
            key: 's',
            callback: (speed: number) => {
                setY((y) => findMiddle(minY + boardHeight / 2, maxY - boardHeight / 2, y) + speed);
            }
        }
    ]);

    return <Paddle x={x} y={y} boardWidth={boardWidth} boardHeight={boardHeight} />;
};

export default PlayerPaddle;
