import './styles/Tetris.css'

import Board from './Board'
import GameStats from './GameStats'
import Previews from "./Previews";

import { useBoard } from '../hooks/useBoard'
import { useGameStats } from '../hooks/useGameStats'
import { usePlayer } from '../hooks/usePlayer'
const Tetris = ({ rows, cols, setGameOver }) => {
    const [board, setBoard ] = useBoard({ rows, cols })
    const [gameStats, addLinesCleared ] = useGameStats()
    const [player, setPlayer, resetPlayer ] = usePlayer()

    return (
        <div className='Tetris'>
            <Board board={board} />
            <GameStats gameStats={gameStats} />
            <Previews tetrominoes={player.tetrominoes} />
        </div>
    )
}

export default Tetris