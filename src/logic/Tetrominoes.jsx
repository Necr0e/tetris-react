﻿const className = 'tetromino'
export const TETROMINOES = {
    I: {
        shape: [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ],
        className: `${className} ${className}_i`
    },
    J: {
        shape: [
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0]
        ],
        className: `${className} ${className}_j`
    },
    L: {
        shape: [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1]
        ],
        className: `${className} ${className}_l`
    },
    O: {
        shape: [
            [1, 1],
            [1, 1]
        ],
        className: `${className} ${className}_o`
    },
    S: {
        shape: [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0]
        ],
        className: `${className} ${className}_s`
    },
    T: {
        shape: [
            [1, 1, 1],
            [0, 1, 0],
            [0, 0, 0]
        ],
        className: `${className} ${className}_t`
    },
    Z: {
        shape: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]
        ],
        className: `${className} ${className}_z`
    }
};

export const randomTetromino = () => {
    const keys = Object.keys(TETROMINOES)
    const index = Math.floor(Math.random() * keys.length)
    const key = keys[index]
    return TETROMINOES[key]
}
export const transferToBoard = ({
    className,
    isOccupied,
    position,
    rows,
    shape
}) => {
    shape.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell) {
                const occupied = isOccupied
                const _y = y + position.row
                const _x = x + position.col
                rows[_y][_x] = { occupied, className }
            }
        })
    })
    
    return rows
}