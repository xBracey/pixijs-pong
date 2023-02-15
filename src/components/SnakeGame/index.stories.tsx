import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SnakeGame from './index';
import { pixiDecorator } from 'src/utils/pixiDecorator';

export default {
    title: 'Components/SnakeGame',
    component: SnakeGame,
    decorators: [pixiDecorator]
} as ComponentMeta<typeof SnakeGame>;

const Template: ComponentStory<typeof SnakeGame> = (args) => <SnakeGame {...args} />;

export const Example = Template.bind({});

Example.args = {
    triggerGameOver: () => {}
};
