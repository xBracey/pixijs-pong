import { useContext, useState } from 'react';
import { useKeyDown } from './useKeyDown';
import { WorldContext } from 'src/components/Physics/World/context';
import { useTick } from '@pixi/react';

const lossRate = 1;

export const useJump = (id: string, jumpAmount: number) => {
    const [jumpValue, setJumpValue] = useState(0);
    const { world } = useContext(WorldContext);

    useKeyDown([
        {
            key: ' ',
            callback: () => {
                setJumpValue(jumpAmount);
            }
        }
    ]);

    useTick(() => {
        const rect = world.getRect(id);
        world.move(id, rect.x, rect.y - jumpValue);

        if (jumpValue) setJumpValue((old) => Math.max(old - lossRate, 0));
    });
};
