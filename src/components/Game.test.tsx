import React from "react";
import { screen, fireEvent, render, cleanup } from "@testing-library/react";
import { Game } from "./Game.tsx";


describe('Game', () => {
    afterEach(() => cleanup)
    it('displays the initial game', () => {
        render(<Game />)
        
        expect(screen.getByText("Tic Tac Toe")).toBeDefined()
        expect(screen.getAllByText('-')).toHaveLength(9)
    })

    it('when a horizontal row all match', () => {
        render(<Game />)

        fireEvent.click(screen.getByTestId('0-0'))
        fireEvent.click(screen.getByTestId('1-1'))
        fireEvent.click(screen.getByTestId('0-1'))
        fireEvent.click(screen.getByTestId('1-2'))
        fireEvent.click(screen.getByTestId('0-2'))

        expect(screen.getByText("Player 1 wins!")).toBeInTheDocument()
    })
})