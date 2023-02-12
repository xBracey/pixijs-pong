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

type BoardActions = SetPlayer1YAction | SetPlayer2YAction | SetBallX | SetBallY;

interface BoardState {
    player1Y: number;
    player2Y: number;
    ballX: number;
    ballY: number;
    ballAngle: number;
}

export const initialState: BoardState = {
    player1Y: 336,
    player2Y: 336,
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

        default:
            return state;
    }
};
