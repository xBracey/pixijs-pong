type SetPlayer1YAction = {
    type: 'SET_PLAYER_1_Y';
    payload: { y: (y: number) => number };
};

type SetPlayer2YAction = {
    type: 'SET_PLAYER_2_Y';
    payload: { y: (y: number) => number };
};

type SetBallX = {
    type: 'SET_BALL_X';
    payload: { x: (x: number) => number };
};

type SetBallY = {
    type: 'SET_BALL_Y';
    payload: { y: (y: number) => number };
};

type SetBallAngle = {
    type: 'SET_BALL_ANGLE';
    payload: { angle: (angle: number) => number };
};

type SetBallSpeed = {
    type: 'SET_BALL_SPEED';
    payload: { speed: (speed: number) => number };
};

type Reset = {
    type: 'RESET';
    payload: { angle: number };
};

type BoardActions = SetPlayer1YAction | SetPlayer2YAction | SetBallX | SetBallY | SetBallAngle | Reset | SetBallSpeed;

interface BoardState {
    ballSpeed: number;
    player1Y: number;
    player2Y: number;
    ballX: number;
    ballY: number;
    ballAngle: number;
}

export const initialState: BoardState = {
    ballSpeed: 5,
    player1Y: 400,
    player2Y: 400,
    ballX: 400,
    ballY: 400,
    ballAngle: (7 * Math.PI) / 4
};

export const reducer = (state: BoardState, action: BoardActions): BoardState => {
    switch (action.type) {
        case 'SET_PLAYER_1_Y':
            return {
                ...state,
                player1Y: action.payload.y(state.player1Y)
            };
        case 'SET_PLAYER_2_Y':
            return {
                ...state,
                player2Y: action.payload.y(state.player2Y)
            };
        case 'SET_BALL_X':
            return {
                ...state,
                ballX: action.payload.x(state.ballX)
            };
        case 'SET_BALL_Y':
            return {
                ...state,
                ballY: action.payload.y(state.ballY)
            };
        case 'SET_BALL_ANGLE':
            return {
                ...state,
                ballAngle: action.payload.angle(state.ballAngle)
            };

        case 'SET_BALL_SPEED':
            return {
                ...state,
                ballSpeed: action.payload.speed(state.ballSpeed)
            };

        case 'RESET':
            return { ...initialState, ballAngle: action.payload.angle };

        default:
            return state;
    }
};
