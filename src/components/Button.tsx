import React from 'react'

import { PLAYERS } from './Game.tsx'

export type ButtonProps = {
    id: number,
    value: string,
    disabled: boolean,
    gameGrid: Array<Array<string>>, 
    setGameGrid: Function,
    player: PLAYERS, 
    setPlayer: Function
}

export const Button = ({id, value, disabled, gameGrid, setGameGrid, player, setPlayer}) => { 
    const rowEnd = id.charAt(2)

    const handleClick = () => {
        const row = id[0]
        const column = id[2]
        const newGrid = gameGrid
        newGrid[row][column] = player === "Player 1" ? "O" : "X"
        setGameGrid(newGrid)
        setPlayer(player === "Player 1" ? "Player 2" : "Player 1")
    }

    return (
        <>
            { rowEnd % 3 === 0 && <br /> }
            <button data-testid={id} id={id} disabled={disabled} onClick={handleClick} >{value}</button>
        </>
    )
}