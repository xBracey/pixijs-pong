import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PlayerPaddle from './index';
import { pixiDecorator } from 'src/utils/pixiDecorator';

export default {
    title: 'Components/PlayerPaddle',
    component: PlayerPaddle,
    decorators: [pixiDecorator]
} as ComponentMeta<typeof PlayerPaddle>;

const Template: ComponentStory<typeof PlayerPaddle> = (args) => {
    const [y, setY] = useState(0);

    return <PlayerPaddle {...args} x={50} y={y} setY={setY} minY={0} maxY={600} />;
};

export const Example = Template.bind({});
