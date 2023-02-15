import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Snake from './index';
import { pixiDecorator } from 'src/utils/pixiDecorator';
import { Coordinates, Direction } from './types';

export default {
    title: 'Components/Snake',
    component: Snake,
    decorators: [pixiDecorator]
} as ComponentMeta<typeof Snake>;

const Template: ComponentStory<typeof Snake> = (args) => {
    const [history, setHistory] = useState<Coordinates[]>([
        { x: 200, y: 200 },
        { x: 210, y: 200 },
        { x: 220, y: 200 },
        { x: 230, y: 200 },
        { x: 240, y: 200 }
    ]);
    const [direction, setDirection] = useState<Direction>('right');

    const addBox = (coords: Coordinates) => {
        setHistory((history) => [...history.slice(1), coords]);
    };

    return <Snake {...args} history={history} addBox={addBox} direction={direction} setDirection={setDirection} />;
};
export const Example = Template.bind({});
