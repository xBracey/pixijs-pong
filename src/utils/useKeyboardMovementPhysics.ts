import { useContext, useState } from 'react';
import { useKeysPressed } from './useKeysPressed';
import { WorldContext } from 'src/components/Physics/World/context';

export const useKeyboardMovementPhysics = (id: string, moveValue: number) => {
    const { world } = useContext(WorldContext);

    useKeysPressed([
        {
            key: 'a',
            callback: (delta) => {
                const rect = world.getRect(id);
                world.move(id, rect.x - moveValue * delta, rect.y);
            }
        },
        {
            key: 'd',
            callback: (delta) => {
                const rect = world.getRect(id);
                world.move(id, rect.x + moveValue * delta, rect.y);
            }
        }
    ]);
};
