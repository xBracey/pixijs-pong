import { Container, Stage } from '@pixi/react';
import React, { useReducer } from 'react';
import { initialState, reducer } from './reducer';
import PlayerPaddle from '../PlayerPaddle';
import ComputerPaddle from '../ComputerPaddle';
import Ball from '../Ball';

const ballSpeed = 2;

interface IBoard {
    player1Type: 'human' | 'computer';
    player2Type: 'human' | 'computer';
}

const Board = ({ player1Type, player2Type }: IBoard) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { player1Y, player2Y, ballX, ballY, ballAngle } = state;

    const setPlayer1Y = (y: (y: number) => number) => dispatch({ type: 'SET_PLAYER_1_Y', payload: { y } });
    const setPlayer2Y = (y: (y: number) => number) => dispatch({ type: 'SET_PLAYER_2_Y', payload: { y } });
    const setBallX = (x: (x: number) => number) => dispatch({ type: 'SET_BALL_X', payload: { x } });
    const setBallY = (y: (x: number) => number) => dispatch({ type: 'SET_BALL_Y', payload: { y } });

    return (
        <Stage width={800} height={600}>
            {player1Type === 'human' ? (
                <PlayerPaddle x={100} y={player1Y} setY={setPlayer1Y} minY={0} maxY={600} />
            ) : (
                <ComputerPaddle x={100} y={player1Y} ballY={ballY} setY={setPlayer1Y} minY={0} maxY={600} />
            )}

            {player2Type === 'human' ? (
                <PlayerPaddle x={700} y={player2Y} setY={setPlayer2Y} minY={0} maxY={600} />
            ) : (
                <ComputerPaddle x={700} y={player2Y} ballY={ballY} setY={setPlayer2Y} minY={0} maxY={600} />
            )}

            <Ball angle={ballAngle} speed={ballSpeed} x={ballX} setX={setBallX} y={ballY} setY={setBallY} />
        </Stage>
    );
};

export default Board;
