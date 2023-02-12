import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Board from './index';
import { pixiDecorator } from 'src/utils/pixiDecorator';

export default {
    title: 'Components/Board',
    component: Board,
    decorators: [pixiDecorator]
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const Example = Template.bind({});

Example.args = {
    player1Type: 'computer',
    player2Type: 'computer',
    player1Point: () => {},
    player2Point: () => {}
};
