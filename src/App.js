import React, { Component } from 'react'

import './App.css'

class App extends Component {

    state = {

        board: Array(9).fill(null),
        player: "X"

    }

    handleOnClick = index => {

        const { board, player } = this.state

        let newBoard = board
        let newPlayer = player === "X" ? "O" : "X"

        if(newBoard[index] === null) {

            newBoard[index] = player

            this.setState({
                board:newBoard,
                player:newPlayer

            })
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
