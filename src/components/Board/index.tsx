import { useTick } from '@pixi/react';
import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './reducer';
import PlayerPaddle from '../PlayerPaddle';
import ComputerPaddle from '../ComputerPaddle';
import Ball from '../Ball';
import { getSquareCoords } from 'src/utils/getSquareCoords';
import { checkObjectsCollide } from 'src/utils/checkObjectsCollide';

const player1X = 100;
const player2X = 700;
const boardHeight = 600;
const boardWidth = 800;
const ballDiameter = 16;
const paddleWidth = 16;
const paddleHeight = 128;

interface IBoard {
    player1Type: 'human' | 'computer';
    player2Type: 'human' | 'computer';
    player1Point: () => void;
    player2Point: () => void;
}

const Board = ({ player1Type, player2Type, player1Point, player2Point }: IBoard) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { player1Y, player2Y, ballX, ballY, ballAngle, ballSpeed } = state;

    const setPlayer1Y = (y: (y: number) => number) => dispatch({ type: 'SET_PLAYER_1_Y', payload: { y } });
    const setPlayer2Y = (y: (y: number) => number) => dispatch({ type: 'SET_PLAYER_2_Y', payload: { y } });
    const setBallX = (x: (x: number) => number) => dispatch({ type: 'SET_BALL_X', payload: { x } });
    const setBallY = (y: (x: number) => number) => dispatch({ type: 'SET_BALL_Y', payload: { y } });
    const setBallSpeed = (speed: (speed: number) => number) => dispatch({ type: 'SET_BALL_SPEED', payload: { speed } });

    useTick(() => {
        const randomResetAngle = (Math.random() * Math.PI) / 3 + Math.PI / 12;
        const randomBounceAngle = 0;

        const ballDebounce = ballSpeed * 2;

        // Ball collision with top and bottom
        if (ballY - ballDiameter / 2 <= 0 || ballY + ballDiameter / 2 >= boardHeight) {
            dispatch({
                type: 'SET_BALL_Y',
                payload: { y: (y: number) => y + (ballY - ballDiameter / 2 <= 0 ? ballDebounce : -ballDebounce) }
            });

            dispatch({
                type: 'SET_BALL_ANGLE',
                payload: { angle: (angle: number) => 2 * Math.PI - angle + randomBounceAngle }
            });

            setBallSpeed((ballSpeed) => ballSpeed + 0.25);
        }

        const ballCoords = getSquareCoords(ballX, ballY, ballDiameter, ballDiameter);
        const player1Coords = getSquareCoords(player1X, player1Y, paddleWidth, paddleHeight);
        const player2Coords = getSquareCoords(player2X, player2Y, paddleWidth, paddleHeight);

        if (checkObjectsCollide(ballCoords, player1Coords)) {
            dispatch({ type: 'SET_BALL_X', payload: { x: (x: number) => x + ballDebounce } });
            dispatch({
                type: 'SET_BALL_ANGLE',
                payload: { angle: (angle: number) => Math.PI - angle + randomBounceAngle }
            });
            setBallSpeed((ballSpeed) => ballSpeed + 0.5);
        }

        if (checkObjectsCollide(ballCoords, player2Coords)) {
            dispatch({ type: 'SET_BALL_X', payload: { x: (x: number) => x - ballDebounce } });
            dispatch({
                type: 'SET_BALL_ANGLE',
                payload: { angle: (angle: number) => Math.PI - angle + randomBounceAngle }
            });
            setBallSpeed((ballSpeed) => ballSpeed + 0.5);
        }

        if (ballX - ballDiameter / 2 <= 0) {
            player2Point();
            dispatch({ type: 'RESET', payload: { angle: (3 * Math.PI) / 4 + randomResetAngle } });
        }

        if (ballX + ballDiameter / 2 >= boardWidth) {
            player1Point();
            dispatch({ type: 'RESET', payload: { angle: Math.PI / 4 + randomResetAngle } });
        }
    });

    return (
        <>
            {player1Type === 'human' ? (
                <PlayerPaddle x={player1X} y={player1Y} setY={setPlayer1Y} minY={0} maxY={boardHeight} />
            ) : (
                <ComputerPaddle
                    x={player1X}
                    y={player1Y}
                    ballY={ballY}
                    setY={setPlayer1Y}
                    minY={0}
                    maxY={boardHeight}
                />
            )}

            {player2Type === 'human' ? (
                <PlayerPaddle x={player2X} y={player2Y} setY={setPlayer2Y} minY={0} maxY={boardHeight} />
            ) : (
                <ComputerPaddle
                    x={player2X}
                    y={player2Y}
                    ballY={ballY}
                    setY={setPlayer2Y}
                    minY={0}
                    maxY={boardHeight}
                />
            )}

            <Ball angle={ballAngle} speed={ballSpeed} x={ballX} setX={setBallX} y={ballY} setY={setBallY} />
        </>
    );
};

export default Board;
