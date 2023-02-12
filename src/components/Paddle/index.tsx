import React from 'react';
import { Sprite } from '@pixi/react';
import { Texture } from '@pixi/core';

interface IPaddle {
    x: number;
    y: number;
    boardWidth: number;
    boardHeight: number;
}

const Paddle = ({ x, y, boardWidth, boardHeight }: IPaddle) => (
    <Sprite x={x} y={y} rotation={0} anchor={0.5} width={boardWidth} height={boardHeight} texture={Texture.WHITE} />
);

export default Paddle;
