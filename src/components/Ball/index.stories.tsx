import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Ball from './index';
import { pixiDecorator } from 'src/utils/pixiDecorator';

export default {
    title: 'Components/Ball',
    component: Ball,
    decorators: [pixiDecorator]
} as ComponentMeta<typeof Ball>;

const Template: ComponentStory<typeof Ball> = (args) => {
    const [x, setX] = useState(300);
    const [y, setY] = useState(300);

    return <Ball {...args} x={x} y={y} setX={setX} setY={setY} />;
};

export const Example = Template.bind({});

Example.args = {
    angle: (7 * Math.PI) / 4,
    speed: 1
};
