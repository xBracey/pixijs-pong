import { Stage } from '@pixi/react';
import { FC } from 'react';

export const pixiDecorator = (Story: FC) => (
    <Stage width={800} height={600}>
        <Story />
    </Stage>
);
