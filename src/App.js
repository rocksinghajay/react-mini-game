import React, { Component } from 'react'

import Status from './components/Status'

import { winningLines } from './constants/constants'

import './App.css'


class App extends Component {

    state = {

        board: Array(9).fill(null),
        player: null,
        winner: null

    }

    handleOnClick = index => {

        const { board, player, winner } = this.state

        let newBoard = board
        let newPlayer = player === "X" ? "O" : "X"


        if(newBoard[index] === null && !winner && player) {

            newBoard[index] = player

            this.setState({
                board:newBoard,
                player:newPlayer
            })

            this.checkWinningPossibilties()

        }

    }

    checkWinningPossibilties = () => {
       
        for (let index = 0; index < winningLines.length; index++) {
            const [a, b, c] = winningLines[index]
            const { board,player } = this.state

            if(board[a] && board[a] === board[b] && board[a] === board[c]) {
                alert("Player win Game Over");

                this.setState({
                    winner:player
                })
            }
            
        }
    }

    setPlayer = (player) => {

        console.log("setPlayer")

        this.setState({
            player
        })
    }

    renderBoxes = () =>  {

      const { board } = this.state


        return (

            board.map((box,index) => {
                return (
                    <div key={index} className="box" onClick={ () => this.handleOnClick(index) }>{ box }</div>
                  )})
                  
        )
    }

    resetGame = () => {

        this.setState({
            player:null,
            winner:null,
            board: Array(9).fill(null)
        })
    }

  render() {

      const { player, winner } = this.state

    return (
      <div className="App">

        <h1>TicTacToe Game</h1>

        
           
        <div className="board">
          { this.renderBoxes() }
        </div>

        <Status  player={player} winner={winner} setPlayer={ (e) => {this.setPlayer(e)} }/>

        {
          player ? <button onClick={this.resetGame}>Rest Game</button> : ''
         
        }

        
        

      </div>
    )
  }
}

export default App;
