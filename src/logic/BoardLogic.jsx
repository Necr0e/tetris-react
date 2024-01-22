﻿import { defaultCell } from './CellLogic'
import { transferToBoard } from './Tetrominoes'
import { movePlayer } from './PlayerController'
export const buildBoard = ({ rows, cols }) => { 
    const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({ ...defaultCell }))
    )
    
    return {
        rows: builtRows,
        size: { rows, cols }
    }
}

const findDropPosition = ({ board, position, shape }) => {
    let max = board.size.rows - position.row + 1
    let row = 0
    
    for (let i = 0; i < max; i++) {
        const delta = { row: i, col: 0 }
        const result = movePlayer({ delta, position, shape, board })
        const { collided } = result
        if (collided ) {
            break
        }
        
        row = position.row + i
    }
    return { ...position, row }
}

export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }) => {
    const { tetromino, position } = player
    let rows = board.rows.map((row) => 
    row.map((cell) => (cell.occupied ? cell : { ...defaultCell }))
    )
    
    const dropPosition = findDropPosition({
        board, 
        position,
        shape: tetromino.shape
    })

    const className = `${tetromino.className} ${player.isFastDropping ? '' : 'ghost'}`
    rows = transferToBoard({
        className,
        isOccupied: player.isFastDropping,
        position: dropPosition,
        rows,
        shape: tetromino.shape
    })

    if (!player.isFastDropping) {
        rows = transferToBoard({
            className: tetromino.className,
            isOccupied: player.collided,
            position,
            rows,
            shape: tetromino.shape
        })
    }

    if (player.collided || player.isFastDropping) {
        resetPlayer()
    }
    return {
        rows,
        size: { ...board.size }
    }
}
export const hasCollision = ({ board, position, shape }) => {
    for (let y = 0; y < shape.length; y++) {
        const row = y + position.row
        
        for (let x = 0; x < shape[y].length; x++) {
            if (shape[y][x]) {
                const col = x + position.col
                
                if (
                    board.rows[row] && 
                    board.rows[row][col] &&
                    board.rows[row][col].occupied
                ) {
                    return true
                }
            }
        }
    }
    return false
}
export const isWithinBoard = ({ board, position, shape }) => {
    for (let y = 0; y < shape.length; y++) {
        const row = y + position.row
        
        for (let x = 0; x < shape[y].length; x++) {
            if (shape[y][x]) {
                const col = x + position.col
                const isValidPosition = board.rows[row] && board.rows[row][col]
                
                if (!isValidPosition) return false
            }
        }
    }
    
    return true
}