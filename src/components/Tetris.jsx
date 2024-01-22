import './styles/Tetris.css'

import Board from './Board'
import GameStats from './GameStats'
import Previews from "./Previews";
import GameController from './GameController'

import { useBoard } from '../hooks/useBoard'
import { useGameStats } from '../hooks/useGameStats'
import { usePlayer } from '../hooks/usePlayer'
const Tetris = ({ rows, cols, setGameOver }) => {
    const [gameStats, addLinesCleared ] = useGameStats()
    const [player, setPlayer, resetPlayer ] = usePlayer()
    const [board, setBoard ] = useBoard({ 
        rows, 
        cols, 
        player, 
        resetPlayer, 
        addLinesCleared 
    })

    return (
        <div className='Tetris'>
            <Board board={board} />
            <GameStats gameStats={gameStats} />
            <Previews tetrominoes={player.tetrominoes} />
            <GameController 
                board={board} 
                gameStats={gameStats} 
                player={player} 
                setGameOver={setGameOver} 
                setPlayer={setPlayer} 
            />
        </div>
    )
}

export default Tetris