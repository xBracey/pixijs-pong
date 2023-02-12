import { Stage } from '@pixi/react';
import { useState } from 'react';
import Board from 'src/components/Board';
import PageLayout from 'src/layouts/PageLayout';

const Index = () => {
    const [player1Points, setPlayer1Points] = useState(0);
    const [player2Points, setPlayer2Points] = useState(0);

    const player1Point = () => setPlayer1Points(player1Points + 1);
    const player2Point = () => setPlayer2Points(player2Points + 1);

    return (
        <PageLayout>
            <div style={{ width: '800px', height: '600px' }} className="relative">
                <div className="absolute top-0 bottom-0 right-0 left-0 z-50 flex justify-center">
                    <div className="bg-white m-4 w-64 h-16 rounded-md flex text-black justify-center items-center">
                        <div className="flex-1">
                            <div className="text-center">Player 1</div>
                            <div className="text-center">{player1Points}</div>
                        </div>
                        <div className="flex-1">
                            <div className="text-center">Player 2</div>
                            <div className="text-center">{player2Points}</div>
                        </div>
                    </div>
                </div>

                <Stage width={800} height={600}>
                    <Board
                        player1Type="computer"
                        player2Type="computer"
                        player1Point={player1Point}
                        player2Point={player2Point}
                    />
                </Stage>
            </div>
        </PageLayout>
    );
};

export default Index;
