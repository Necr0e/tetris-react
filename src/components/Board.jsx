import './styles/Board.css'
import  BoardCell from './BoardCell'

// Dynamically sets evenly sized grids for the board.
// Loops through the cells and generates a key for each cell.
const Board = ({ board }) => {
    const boardStyles = {
        gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${board.size.cols}, 1fr`
    }
    return (
     <div className='Board' style={boardStyles}>
         {board.rows.map((row) =>
         row.map((cell, x) => (
             <BoardCell key={x * board.size.cols + x} cell={cell} />
             ))
         )}
     </div>   
    )
}

export default Board