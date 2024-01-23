import React, { useEffect, useState } from 'react'
import { Button } from './Button.tsx'

const INITIAL_GRID_STATE = [['-', '-', '-'],['-', '-', '-'],['-', '-', '-']];
export type PLAYERS = "Player 1" | "Player 2"

const checkRowMatches = (row: Array<string>) => row.every(item => item === 'X') || row.every(item => item === 'O')

export const Game = () => {
    const [gameGrid, setGameGrid] = useState<Array<Array<string>>>(INITIAL_GRID_STATE)
    const [player, setPlayer] = useState<PLAYERS>("Player 1")
    const [winner, setWinner] = useState<string>('')

    useEffect(() => {
        let winner = gameGrid.map(row => checkRowMatches(row)).includes(true) ? player : '';
        if (!winner) {
            const columnGrid = [
                [gameGrid[0][0], gameGrid[1][0], gameGrid[2][0]],
                [gameGrid[1][0], gameGrid[1][1], gameGrid[1][2]],
                [gameGrid[2][0], gameGrid[2][1], gameGrid[2][2]],
                [gameGrid[0][0], gameGrid[1][1], gameGrid[2][2]],
                [gameGrid[0][2], gameGrid[1][1], gameGrid[2][0]],
            ]
            winner = columnGrid.map(row => checkRowMatches(row)).includes(true) ? player : '';
        }

        setWinner(winner)
    }, [player, gameGrid])

    return (
        <>
            <h1>Tic Tac Toe</h1>
            
            <ul>
                {gameGrid.map((row, rowIndex) => row.map((gridItem, gridItemIndex) => <Button key={rowIndex + '-' + gridItemIndex} id={rowIndex + '-' + gridItemIndex} value={gridItem} disabled={gridItem !== '-' || winner} player={player} setPlayer={setPlayer} gameGrid={gameGrid} setGameGrid={setGameGrid} />))}
            </ul>

            { winner && <h2>{player === "Player 1" ? 'Player 2' : 'Player 1'} wins!</h2> }
        </>
    )
}