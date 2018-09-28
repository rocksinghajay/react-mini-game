import React, { Component } from 'react'

import './App.css'
import { winningLines } from './constants/constants';

class App extends Component {

    state = {

        board: Array(9).fill(null),
        player: "X",
        winner: null

    }

    handleOnClick = index => {

        const { board, player, winner } = this.state

        let newBoard = board
        let newPlayer = player === "X" ? "O" : "X"

        if(newBoard[index] === null && winner  ) {

            newBoard[index] = player

            this.setState({
                board:newBoard,
                player:newPlayer

            })
        }

        this.checkWinningPossibilties()
    }

    checkWinningPossibilties = () => {
       
        for (let index = 0; index < winningLines.length; index++) {
            const [a, b, c] = winningLines[index]
            const { board,player } = this.state

            if(board[a] && board[a] === board[b] && board[a] === board[c]) {
                alert("Player win Game Over");

                this.setState({
                    winner:this.state.player
                })
            }
            
        }
    }

  render() {

      const { board } = this.state
      const boxes = board.map((box,index) => {
          return (
              <div key={index} className="box" onClick={ () => this.handleOnClick(index) }>{ box }</div>
            )})

    return (
      <div className="App">

        <h1>TicTacToe Game</h1>

        <div className="board">
          { boxes }
        </div>

      </div>
    );
  }
}

export default App;
