import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ComputerPaddle from './index';
import { pixiDecorator } from 'src/utils/pixiDecorator';

export default {
    title: 'Components/ComputerPaddle',
    component: ComputerPaddle,
    decorators: [pixiDecorator]
} as ComponentMeta<typeof ComputerPaddle>;

const Template: ComponentStory<typeof ComputerPaddle> = (args) => {
    const [y, setY] = useState(0);

    return <ComputerPaddle {...args} x={50} y={y} setY={setY} minY={0} maxY={600} ballY={200} />;
};

export const Example = Template.bind({});
