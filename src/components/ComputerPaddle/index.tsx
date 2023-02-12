import React from 'react';
import Paddle from '../Paddle';
import { useAI } from 'src/utils/useAI';
import { IComputerPaddle } from './types';

const boardWidth = 16;
const boardHeight = 128;

const ComputerPaddle = ({ x, y, setY, minY, maxY, ballY }: IComputerPaddle) => {
    useAI(y, setY, minY, maxY, boardHeight, ballY);

    return <Paddle x={x} y={y} boardWidth={boardWidth} boardHeight={boardHeight} />;
};

export default ComputerPaddle;
