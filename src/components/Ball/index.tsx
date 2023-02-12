import React from 'react';
import { Sprite, useTick } from '@pixi/react';
import { Texture } from '@pixi/core';

const ballDiameter = 8;

interface IBall {
    angle: number;
    speed: number;
    x: number;
    setX: (x: (x: number) => number) => void;
    y: number;
    setY: (y: (y: number) => number) => void;
}

const Ball = ({ angle, speed, x, setX, y, setY }: IBall) => {
    useTick(() => {
        const newX = Math.cos(angle) * speed;
        const newY = Math.sin(angle) * speed;

        setX((x) => x + newX);
        setY((y) => y + newY);
    });

    return (
        <Sprite
            x={x}
            y={y}
            rotation={0}
            anchor={0}
            width={ballDiameter}
            height={ballDiameter}
            texture={Texture.WHITE}
        />
    );
};

export default Ball;
