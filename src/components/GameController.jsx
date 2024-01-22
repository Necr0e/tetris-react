import './styles/GameController.css'

import { Action, actionForKey } from '../logic/InputController'
import { playerController } from '../logic/PlayerController'
const GameController = ({
    board, 
    gameStats, 
    player, 
    setGameOver, 
    setPlayer
}) => {
    const onKeyUp = ({ code }) => {
        const action = actionForKey(code)
        if (action === Action.Quit) {
            setGameOver(true)
        }
    }
    const onKeyDown = ({ code }) => {
        const action = actionForKey(code)
        handleInput({ action })
    }
    
    const handleInput = ({ action }) => {
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver
        })
    }
    return (
        <input 
            className='GameController' 
            type='text'
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            autoFocus
        />
    )
}

export default GameController