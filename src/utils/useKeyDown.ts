import { useEffect } from 'react';

export const useKeyDown = (events: { key: string; callback: () => void }[]) => {
    const handleKeyDown = (e: KeyboardEvent) => {
        const event = events.find(({ key }) => key === e.key);

        if (event) {
            const { key, callback } = event;

            callback();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
};
