import { useState } from 'react'
import { buildBoard } from "../logic/BoardLogic.jsx";
export const useBoard = ({ rows, cols }) => {
    const [board] = useState(buildBoard({ rows, cols }))
    
    return [board]
}