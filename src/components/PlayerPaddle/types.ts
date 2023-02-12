export interface IPlayerPaddle {
    x: number;
    y: number;
    setY: (y: (y: number) => number) => void;
    minY: number;
    maxY: number;
}
