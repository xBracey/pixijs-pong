import { IPlayerPaddle } from '../PlayerPaddle/types';

export interface IComputerPaddle extends IPlayerPaddle {
    ballY: number;
}
