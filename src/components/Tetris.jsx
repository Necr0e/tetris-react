import './styles/Tetris.css'
import Board from './Board'
import GameStats from './GameStats'
import { useBoard } from '../hooks/useBoard'
import { useGameStats } from '../hooks/useGameStats'
const Tetris = ({ rows, cols, setGameOver }) => {
    const [board, setBoard ] = useBoard({ rows, cols })
    const [gameStats, addLinesCleared ] = useGameStats()

    return (
        <div className='Tetris'>
            <Board board={board} />
            <GameStats gameStats={gameStats} />
        </div>
    )
}

export default Tetris