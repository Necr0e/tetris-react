import { defaultCell } from './CellLogic'
import { transferToBoard } from './Tetrominoes.jsx'
export const buildBoard = ({ rows, cols }) => { 
    const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({ ...defaultCell }))
    )
    
    return {
        rows: builtRows,
        size: { rows, cols }
    }
}

export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }) => {
    const { tetromino, position } = player
    let rows = board.rows.map((row) => 
    row.map((cell) => (cell.occupied ? cell : { ...defaultCell }))
    )
    
    rows = transferToBoard({
        className: tetromino.className,
        isOccupied: player.collided,
        position,
        rows,
        shape: tetromino.shape
    })
    
    return {
        rows,
        size: { ...board.size }
    }
}