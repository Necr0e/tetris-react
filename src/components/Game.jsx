import Menu from './Menu'
import Tetris from './Tetris'

//hooks
import { useGameOver } from '../hooks/useGameOver'
const Game = ({ rows, cols }) => {
    const [gameOver, setGameOver, resetGameOver] = useGameOver()
    const startGame = () => resetGameOver()
    
    return (
        <div className='Game'>
            {gameOver ? (
                <Menu onClick={startGame} /> 
            ) : (
                <Tetris rows={rows} cols={cols} setGameOver={setGameOver} />
            )}
        </div>
    )
}

export default Game